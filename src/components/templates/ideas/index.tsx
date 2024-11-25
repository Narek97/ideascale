'use client';
import React, { useMemo, useState } from 'react';
import {
  Combobox,
  Dropdown,
  InputOnChangeData,
  mergeClasses,
  Option,
  OptionOnSelectData,
  SearchBox,
  SearchBoxChangeEvent,
  SelectionEvents,
} from '@fluentui/react-components';

import CampaignIcon from '@/public/promotion.svg';
import CommunityIcon from '@/public/user-group.svg';
import { useStyles } from '@/components/templates/ideas/style';
import { useAuthState } from '@/providers/AuthProvider';
import { debounced400 } from '@/hooks/useDebounce';
import { useCampaigns } from '@/react-query/campaign';
import { useIdeas } from '@/react-query/ideas';
import { IdeaType } from '@/utils/ts/types/idea';
import useApiTokenStore from '@/store/apiTokenStore';
import IdeaList from '@/components/templates/ideas/idea-list';

const Ideas = () => {
  const classes = useStyles();
  const { user } = useAuthState();
  const { addApiToken } = useApiTokenStore();

  const [selectedCommunity, setSelectedCommunity] = useState<{
    optionText: string;
    optionValue: string;
  } | null>(null);
  const [selectedCampaigns, setSelectedCampaigns] = useState<
    Array<{ optionText: string; optionValue: string }>
  >([]);
  const [searchText, setSearchText] = useState<string>('');

  // Call useIdeas with selectedCampaigns
  const {
    data: ideas,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useIdeas(
    selectedCommunity?.optionValue ?? '', // Fallback to empty string if no community selected
    selectedCampaigns.map(campaign => campaign.optionValue), // Map selected campaigns' values
    searchText,
  );

  const { data: campaigns } = useCampaigns(selectedCommunity?.optionValue || '');

  const handleOptionSelect = (_: SelectionEvents, data: OptionOnSelectData) => {
    setSelectedCampaigns(prevSelected => {
      const isSelected = prevSelected.some(campaign => campaign.optionValue === data.optionValue);
      if (isSelected) {
        // Remove if already selected
        return prevSelected.filter(campaign => campaign.optionValue !== data.optionValue);
      } else {
        // Add if not selected
        return [
          ...prevSelected,
          {
            optionText: data.optionText || '',
            optionValue: data.optionValue || '',
          },
        ];
      }
    });
  };

  const handleSearchChange = (_: SearchBoxChangeEvent, data: InputOnChangeData) => {
    debounced400(() => {
      setSearchText(data.value);
    });
  };

  const renderedData = useMemo(
    () =>
      ideas?.pages &&
      ideas?.pages[0] !== undefined &&
      ideas?.pages.reduce<Array<IdeaType>>((acc, curr) => [...acc, ...curr.data], []),
    [ideas?.pages],
  );

  return (
    <div className={'base-body'}>
      <div className={classes.filters}>
        <div className={classes.rowItem}>
          <Dropdown
            button={
              <span className={classes.dropdownLabel}>
                <CommunityIcon />
                {selectedCommunity?.optionText || 'Select Community'}
              </span>
            }
            className={mergeClasses(classes.dropdown, classes.customStyle)}
            onOptionSelect={(event, data) => {
              addApiToken(data.optionValue || '');
              setSelectedCommunity({
                optionText: data.optionText || '',
                optionValue: data.optionValue || '',
              }); // Replace `setSelectedCommunity` with your state update function
            }}>
            {user?.memberships?.map(option => (
              <Option
                value={option.apiTokens[0].toString()}
                key={option.id}
                style={{
                  width: '100%',
                }}>
                {option.name}
              </Option>
            ))}
          </Dropdown>
          <div className={classes.comboboxBlock}>
            <Combobox
              disabled={!campaigns}
              placeholder={'Select Campaigns'}
              multiselect
              selectedOptions={selectedCampaigns.map(cm => cm.optionValue)}
              className={mergeClasses(classes.dropdown, classes.combobox, classes.customStyle)}
              onOptionSelect={handleOptionSelect}>
              {campaigns?.map(option => (
                <Option value={option.id.toString()} key={option.id}>
                  {option.name}
                </Option>
              ))}
            </Combobox>
            <span className={classes.comboboxIcon}>
              <CampaignIcon />
            </span>
          </div>
        </div>
        <div className={classes.rowItem}>
          {/*<SubmitIdea />*/}
          <SearchBox
            disabled={!campaigns}
            contentBefore={null}
            className={classes.search}
            placeholder="Search idea"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <IdeaList
        ideas={renderedData || []}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading || isFetchingNextPage}
      />
    </div>
  );
};

export default Ideas;
