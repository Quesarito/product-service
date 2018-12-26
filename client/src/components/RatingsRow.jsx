import React from 'react';
import styled from 'styled-components';
import Link from './Link.jsx';
import RatingsBar from './RatingsBar.jsx';

const getPercentage = (amount, total) => Math.floor(amount / total * 100);

const Row = styled.div`
  padding: 2px;
  font-size: 12px;
`;

const RowLink = styled(Link)`
  padding-right: 5px;
`;

const RatingsRow = ({ starNum, amount, total }) => {
  return (
    <Row>
      <RowLink>{starNum} star</RowLink> 
      <RatingsBar amount={amount} total={total} />
      &nbsp; { getPercentage(amount, total) }%
    </Row>
  );
};

export default RatingsRow;
