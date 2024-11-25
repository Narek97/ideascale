import * as React from 'react';

import { makeStyles, Skeleton as MySkeleton, SkeletonItem } from '@fluentui/react-components';
import type { SkeletonProps } from '@fluentui/react-components';

const IdeaCardSkeleton = (props: Partial<SkeletonProps>) => {
  const classes = useStyles();
  return (
    <MySkeleton {...props} className={classes.card} aria-label="Loading Content">
      <SkeletonItem
        className={classes.background}
        shape="rectangle"
        style={{
          height: Math.floor(Math.random() * (350 - 150 + 1)) + 150,
        }}
      />
    </MySkeleton>
  );
};

const useStyles = makeStyles({
  card: {
    width: '100%',
    padding: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  background: { height: 'auto', aspectRatio: 'auto 346/166' },
});

export default IdeaCardSkeleton;
