import React, { FC, useState } from 'react';
import './style.css';

import { SkeletonItem } from '@fluentui/react-components';
import { useRouter } from 'next/navigation';

import CampaignCard from '@/components/molecules/campaign-card';
import CampaignCardSkeleton from '@/components/molecules/campaign-card-skeleton';
import { useCampaigns } from '@/react-query/campaign';

import ArrowIcon from '@/public/arrow-up.svg';
import useApiTokenStore from '@/store/apiTokenStore';

interface ICommunity {
  id: number;
  title: string;
  apiToken: string;
}

const Community: FC<ICommunity> = ({ id, title, apiToken }) => {
  const { data, isLoading } = useCampaigns(apiToken);
  const { addApiToken } = useApiTokenStore();

  const router = useRouter();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const onHandleNavigate = (campaignId: number) => {
    addApiToken(apiToken);
    router.push(`/community/${id}/campaign/${campaignId}?apiToken=${apiToken}`);
  };

  return (
    <div>
      {isLoading ? (
        <SkeletonItem
          shape="rectangle"
          style={{
            height: '20px',
            marginBottom: '17px',
          }}
        />
      ) : (
        <div className={'community-header'}>
          <p className={'community-title'}>
            {title} {`(${data?.length || 0})`}
          </p>
          <button
            className={`community-button ${isCollapsed ? 'community-button-collapsed' : ''}`}
            onClick={() => setIsCollapsed(prev => !prev)}>
            <ArrowIcon />
          </button>
        </div>
      )}
      {isLoading ? (
        <ul className="community-ul">
          {Array(6)
            .fill('')
            .map((_, index) => (
              <li key={index} className="community-loading-item">
                <CampaignCardSkeleton />
              </li>
            ))}
        </ul>
      ) : (
        <ul className={`community-ul ${isCollapsed ? '' : 'community-ul-collapsed'}`}>
          {data?.map(campaign => (
            <li
              key={campaign.id}
              className={'community-item'}
              onClick={() => onHandleNavigate(campaign.id)}>
              <CampaignCard campaign={campaign} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Community;
