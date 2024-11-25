import * as React from 'react';

import { makeStyles, Skeleton as MySkeleton, SkeletonItem } from '@fluentui/react-components';
import type { SkeletonProps } from '@fluentui/react-components';

const CampaignCardSkeleton = (props: Partial<SkeletonProps>) => {
  const classes = useStyles();
  return (
    <MySkeleton {...props} className={classes.card} aria-label="Loading Content">
      <SkeletonItem className={classes.background} shape="rectangle" />
      <SkeletonItem className={classes.cardHeader} shape="rectangle" />
      <SkeletonItem className={classes.desc} shape="rectangle" />
    </MySkeleton>
  );
};

const useStyles = makeStyles({
  card: {
    padding: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    width: '100%',
  },
  background: { height: 'auto', aspectRatio: 'auto 346/166' },
  cardHeader: { height: '48px', marginTop: '16px' },
  desc: {
    height: '24px',
    marginTop: '8px',
  },
});

export default CampaignCardSkeleton;
