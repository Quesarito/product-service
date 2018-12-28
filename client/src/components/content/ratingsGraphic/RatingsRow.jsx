import React from 'react';
import styled from 'styled-components';
import Link from '../../styledComponents/Link.jsx';
import RatingsBar from './RatingsBar.jsx';

const Row = styled.div`
  padding: 2px;
  font-size: 12px;
`;

const RowLink = styled(Link)`
  padding-right: 5px;
`;

const getPercentageString = (amount, total) => Math.floor(amount / total * 100).toString();

const Percentage = ({ percent }) => {
  return percent.charAt(1) === '' ?
    (
      <span> &nbsp; { percent }%&nbsp;&nbsp; </span>
    ) : (
      <span> &nbsp; { percent }%</span>
    );
};


const RatingsRow = ({ starNum, amount, total }) => {
  return (
    <Row>
      <RowLink>{starNum} star</RowLink> &nbsp;&nbsp;
      <RatingsBar amount={amount} total={total} />
      <Percentage percent={ getPercentageString(amount, total) } />
    </Row>
  );
};

export default RatingsRow;
