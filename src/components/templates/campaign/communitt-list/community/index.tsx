import React, { FC, useState } from 'react';
import './style.css';

import { SkeletonItem } from '@fluentui/react-components';

import CampaignCard from '@/components/molecules/campaign-card';
import Skeleton from '@/components/molecules/skeleton';
import { useCampaigns } from '@/react-query/campaign';

import ArrowIcon from '@/public/arrow-up.svg';

interface ICommunity {
  id: number;
  title: string;
  apiToken: string;
}

const Community: FC<ICommunity> = ({ id, title, apiToken }) => {
  const { data, isLoading } = useCampaigns(apiToken);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  console.log(isCollapsed, 'isCollapsed');
  return (
    <div>
      {!isLoading && (
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
          <SkeletonItem shape="rectangle" />
          {Array(6)
            .fill('')
            .map((_, index) => (
              <li key={index} className="community-loading-item">
                <Skeleton />
              </li>
            ))}
        </ul>
      ) : (
        <ul className={`community-ul ${isCollapsed ? '' : 'community-ul-collapsed'}`}>
          {data?.map(campaign => (
            <li key={campaign.id} className={'community-item'}>
              <CampaignCard campaign={campaign} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Community;
