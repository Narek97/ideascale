import React, { FC, useMemo } from 'react';

import IdeaList from '@/components/templates/ideas/idea-list';
import { useCampaignIdeas } from '@/react-query/campaign';
import { Filter } from '@/utils/ts/types';
import { IdeaType } from '@/utils/ts/types/idea';

interface IIdeas {
  apiToken: string;
  campaignId: string;
  filter: Filter;
}

const IdeasTab: FC<IIdeas> = ({ apiToken, campaignId, filter }) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useCampaignIdeas(
    campaignId,
    apiToken,
    filter,
  );

  const renderedData = useMemo(
    () => data?.pages.reduce<Array<IdeaType>>((acc, curr) => [...acc, ...curr.data], []),
    [data?.pages],
  );

  return (
    <IdeaList
      ideas={renderedData || []}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading || isFetchingNextPage}
    />
  );
};

export default IdeasTab;
