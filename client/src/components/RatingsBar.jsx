import React from 'react';
import styled from 'styled-components';

const Bar = styled.span`
  padding: 10px blue;
`;

const RatingsBar = ({ amount, total }) => {
  return (
    <Bar></Bar>
  );
};

export default RatingsBar;
