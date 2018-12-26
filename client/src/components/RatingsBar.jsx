import React from 'react';
import styled from 'styled-components';

const Bar = styled.span`
  border-top: 5px solid lightgray;
  border-bottom: 5px solid lightgray;
  border-left: 60px solid lightgray;
  border-right: 60px solid lightgray;
  margin-bottom: 5px;
  z-index: 1;
`;

const RatingsBar = ({ amount, total }) => <Bar></Bar>;

export default RatingsBar;
