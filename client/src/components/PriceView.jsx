import React from 'react';
import styled from 'styled-components';

const Red = styled.span`
  color: rgb(177,39,4);
  font-size: 17px;
  line-height: 1.2px;
`;

const Gray = styled.div`
  color: rgb(85,85,85);
  font-size: 13px;
  line-height: 19px;
`;

const PriceView = ({ price }) => (
  <Gray>
    Price: 
    <Red>${price}</Red>
  </Gray>
);

export default PriceView;
