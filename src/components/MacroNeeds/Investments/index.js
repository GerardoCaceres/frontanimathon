import React from 'react'

import Icon from '../../commons/Icon';
import Section from '../../commons/Section';

const Investments = ({data}) => {

  const {investments} = data || {}

  return (
    <div className="macroneed">
        <Icon icon="BannerInvestments" />
        <div className="pills">
          <span>Investments</span>
          <span>Credits</span>
      </div>
      <Section section={investments.assets} />
      <Section section={investments.welcome} />
    </div>
  );
}

export default Investments;
