'use client';
import React, { FC, useCallback, useMemo, useState } from 'react';

import { SearchBox, SkeletonItem } from '@fluentui/react-components';
import { useSearchParams } from 'next/navigation';

import Breadcrumb, { IBreadcrumbItem } from '@/components/molecules/breadcrumb';
import Banner from '@/components/templates/campaign/banner';
import NavigationFilterBar, {
  OptionType,
  TabKeys,
} from '@/components/templates/campaign/navigation-filter-bar';
import { useStyles } from '@/components/templates/campaign/style';
import IdeasTab from '@/components/templates/campaign/tabs/ideas-tab';
import { useCampaign } from '@/react-query/campaign';

import SearchIcon from '@/public/search.svg';

interface ICampaign {
  communityId: string;
  campaignId: string;
  apiToken: string;
}

const Campaign: FC<ICampaign> = ({ communityId, campaignId, apiToken }) => {
  const { data, isLoading } = useCampaign(campaignId, apiToken);
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'ideas';
  const classes = useStyles();

  const [selectedOption, setSelectedOption] = useState<OptionType>({
    value: 'recent',
    title: 'Most Recent',
  });

  const breadcrumbItems: Array<IBreadcrumbItem> = useMemo(() => {
    return [
      { name: 'Campaign', path: '/campaign' },
      { name: data?.name || '', path: '/campaign', isCurrent: true },
    ];
  }, [data]);

  const renderContent = useMemo(() => {
    switch (tab) {
      case 'ideas':
        return (
          <IdeasTab apiToken={apiToken} campaignId={campaignId} filter={selectedOption.value} />
        );
      // return params.id ? <Ideas campaignId={params.id} filter={selectedOption.value} /> : null;

      default:
        return <>In development mode</>;
    }
  }, [tab, apiToken, campaignId, selectedOption.value]);

  const onHandleSelectOption = useCallback((option: OptionType) => {
    setSelectedOption(option);
  }, []);

  return (
    <div className={'campaign'}>
      {isLoading ? (
        <SkeletonItem shape="rectangle" style={{ height: '44px', marginBottom: '12px' }} />
      ) : (
        <div className={'campaign-header'}>
          <Breadcrumb items={breadcrumbItems} />
          <SearchBox
            contentBefore={
              <>
                <SearchIcon />
              </>
            }
            placeholder="Search idea"
            className={classes.search}
          />
        </div>
      )}

      <div className={'base-body'}>
        {isLoading ? (
          <SkeletonItem
            shape="rectangle"
            style={{ width: '100%', height: '154px', marginBottom: '12px' }}
          />
        ) : (
          <Banner
            bannerImage={data?.bannerImage || ''}
            logoImage={data?.logoImage || ''}
            name={data?.name || ''}
            communityName={''}
          />
        )}
        {isLoading ? (
          <SkeletonItem
            shape="rectangle"
            style={{ width: '100%', height: '45px', marginBottom: '12px' }}
          />
        ) : (
          <NavigationFilterBar
            selectedValue={tab as TabKeys}
            campaignId={campaignId}
            communityId={communityId}
            onHandleSelectOption={onHandleSelectOption}
          />
        )}

        {renderContent}
      </div>
    </div>
  );
};

export default Campaign;
