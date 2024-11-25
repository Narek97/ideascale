'use client';
import React, { FC } from 'react';

import { Tab, TabList } from '@fluentui/react-components';
import { useRouter, useSearchParams } from 'next/navigation';

import { Filter } from '@/utils/ts/types';

import { useStyles } from './style';

enum Tabs {
  'ideas' = 'Ideas',
  'about' = 'About',
  'team' = 'Team',
  'workflow' = 'Workflow',
}

export type TabKeys = keyof typeof Tabs;

export type OptionType = { value: Filter; title: string };

interface INavigationFilterBar {
  selectedValue: TabKeys;
  communityId: string;
  campaignId: string;
  onHandleSelectOption: (option: OptionType) => void;
}

// const options: Array<OptionType> = [
//   { value: 'recent', title: 'Most Recent' },
//   { value: 'hot', title: 'Trading' },
// ];

const NavigationFilterBar: FC<INavigationFilterBar> = ({
  selectedValue,
  // communityId,
  // campaignId,
  // onHandleSelectOption,
}) => {
  const classes = useStyles();

  const router = useRouter();
  const searchParams = useSearchParams();

  const onHandleChangeTab = (tab: TabKeys) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('tab', tab); // Update or add the 'tab' query parameter

    // Update the URL without reloading
    router.push(`?${currentParams.toString()}`);
  };

  return (
    <div className={classes.navigation}>
      <TabList
        selectedValue={selectedValue}
        className={classes.tabs}
        onTabSelect={(_, data) => {
          onHandleChangeTab(data.value as TabKeys);
        }}>
        {Object.entries(Tabs).map(([key, value]) => (
          <Tab key={key} className={classes.tab} value={key}>
            {value}
          </Tab>
        ))}
      </TabList>
      <div className={classes.actions}>
        {/*<Menu*/}
        {/*  options={options}*/}
        {/*  defaultOption={options[0]}*/}
        {/*  onChange={option => onHandleSelectOption(option)}*/}
        {/*/>*/}
        {/*<SubmitIdea />*/}
      </div>
    </div>
  );
};

export default NavigationFilterBar;
