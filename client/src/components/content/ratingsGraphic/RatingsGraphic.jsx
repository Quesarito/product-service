import React from 'react';
import styled from 'styled-components';
import RatingsRow from './RatingsRow.jsx';
import Link from '../../styledComponents/Link.jsx';

const weighted = (one, two, three, four, five, total) => {
  let weightedAvg = (one * 1 + two * 2 + three * 3 + four * 4 + five * 5) / (total * 5);
  return weightedAvg.toFixed(1);
};

const CSSTriangle = styled.span`
  z-index: 3;
  background: rgba(0, 0, 0, 0);
  width: 0px;
  height: 0px;
  border: 9.5px solid rgba(0, 0, 0, 0);
  border-bottom-color: white;
  margin-left: 107px;
  margin-top: -19px;
  position: absolute;
`;

const CSSTriangleBorder = styled.span`
  z-index: 2;
  background: rgba(0, 0, 0, 0);
  width: 0px;
  height: 0px;
  border: 11.5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(211, 211, 211, 0.8);
  margin-left: 105px;
  margin-top: -23.5px;
  position: absolute;
`;

const Box = styled.div`
  color: rgb(83, 83, 83);
  z-index: 1;
  float: left;
  margin-left: -58px;
  margin-top: 7px;
  position: absolute;
  height: 193px;
  width: 233px;
  background: white;
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  box-shadow: 0.5px 1px 1px 1px rgba(0, 0, 0, 0.1);
  transition-delay: 1s;
`;

const CenterAlign = styled.div`
  text-align: center;
`;

const FirstRow = styled.div`
  padding: 13px;
`;

const LastLink = styled(Link)`
  font-size: 12px;
`;

const RatingsGraphic = ({ one, two, three, four, five }) => {
  const total = one + two + three + four + five;
  const ratings = [[5, five], [4, four], [3, three], [2, two], [1, one]];

  return (
    <Box>
      <CSSTriangle></CSSTriangle><CSSTriangleBorder></CSSTriangleBorder>
      
      <CenterAlign>
        <FirstRow> 
          { weighted(one, two, three, four, five, total) } out of 5 stars 
        </FirstRow>
        { ratings.map(rating => <RatingsRow starNum={rating[0]} amount={rating[1]} total={total} />)}
        <LastLink>See all {total} reviews ></LastLink>
      </CenterAlign>

    </Box>
  );
};

export default RatingsGraphic;
