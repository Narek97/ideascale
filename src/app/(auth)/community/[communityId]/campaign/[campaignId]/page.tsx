import React from 'react';

import Campaign from '@/components/templates/campaign';

const CampaignPage = async ({ params, searchParams }: { params: any; searchParams: any }) => {
  const { communityId, campaignId } = (await params) as { communityId: string; campaignId: string };
  const { apiToken } = await searchParams;

  if (!apiToken) {
    return <div>apiToken not found</div>;
  }

  return (
    <>
      <Campaign communityId={communityId} campaignId={campaignId} apiToken={apiToken} />
    </>
  );
};

export default CampaignPage;
