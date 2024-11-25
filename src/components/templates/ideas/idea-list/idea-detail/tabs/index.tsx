import { useState } from 'react';
import { useStyles } from './style';
import Activity from '@/components/templates/ideas/idea-list/idea-detail/tabs/activity';
import Comments from '@/components/templates/ideas/idea-list/idea-detail/tabs/comments';
import Attachments from '@/components/templates/ideas/idea-list/idea-detail/tabs/attachments';

type TabKey = 'activity' | 'comments' | 'attachments';

export const IdeaTabs = ({ ideaId }: { ideaId: number }) => {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState<TabKey>('activity');

  const tabs: Array<{ key: TabKey; value: string }> = [
    { key: 'activity', value: 'Activity' },
    { key: 'comments', value: 'Comments' },
    { key: 'attachments', value: 'Attachments' },
  ];

  const tabPage = {
    activity: <Activity ideaId={ideaId} />,
    comments: <Comments ideaId={ideaId} />,
    attachments: <Attachments ideaId={ideaId} />,
  };

  return (
    <>
      <ul className={classes.tabsListBlock}>
        {tabs.map(tab => (
          <li
            key={tab.key}
            className={`${selectedTab === tab.key ? classes.selectedTab : ''} ${
              classes.defaultTab
            }`}
            onClick={() => setSelectedTab(tab.key)}>
            {tab.value}
          </li>
        ))}
      </ul>

      {tabPage[selectedTab]}
    </>
  );
};
