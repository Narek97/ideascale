import React, { FC } from 'react';

import { mergeClasses } from '@fluentui/react-components';

import { useStyles } from './style';

interface IBanner {
  bannerImage: string;
  logoImage: string;
  name: string;
  communityName: string;
}

const Banner: FC<IBanner> = ({ bannerImage, logoImage, name, communityName }) => {
  const classes = useStyles();

  return (
    <div className={classes.banner} style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className={classes.bannerContent}>
        <img alt="small" src={logoImage} className={classes.smallImage} />
        <div className={classes.bannerInfo}>
          <p className={mergeClasses(classes.text, classes.title)}>{name}</p>
          <p className={mergeClasses(classes.text, classes.subtitle)}>{communityName}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
