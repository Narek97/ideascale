'use client';
import React, { FC } from 'react';

import { Card, CardHeader, CardPreview, Text } from '@fluentui/react-components';

import { useStyles } from '@/components/molecules/campaign-card/style';
import { CampaignType } from '@/utils/ts/types/campaign';

interface ICampaignCard {
  campaign: CampaignType;
}

const CampaignCard: FC<ICampaignCard> = ({ campaign }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardPreview className={classes.background}>
        <img className={classes.banner} src={campaign.bannerImage} alt="Presentation Preview" />
      </CardPreview>

      <CardHeader
        className={classes.cardHeader}
        header={<Text weight="semibold">{campaign.name}</Text>}
      />
      <p className={classes.desc} dangerouslySetInnerHTML={{ __html: campaign.description }} />
    </Card>
  );
};

export default CampaignCard;
