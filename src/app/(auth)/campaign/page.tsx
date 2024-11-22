import React from 'react';
import './style.css';

import CommunityList from '@/components/templates/campaign/communitt-list';

const Campaign = () => {
  return (
    <section className={'campaign'}>
      <CommunityList />
    </section>
  );
};

export default Campaign;
