import React from 'react';
import styled from 'styled-components';
import RatingsRow from './RatingsRow.jsx';
import RatingsBox from '../../styledComponents/RatingsBox.jsx';
import { LastLink } from '../../styledComponents/Link.jsx';
import { CSSTriangle, CSSTriangleBorder } from '../../styledComponents/CSSTriangle.jsx';

const CenterAlign = styled.div`
  text-align: center;
`;

const FirstRow = styled.div`
  padding: 13px;
`;

const RatingsGraphic = ({ one, two, three, four, five, weighted }) => {
  const total = one + two + three + four + five;
  const ratings = [[5, five], [4, four], [3, three], [2, two], [1, one]];

  return (
    <RatingsBox>
      <CSSTriangle></CSSTriangle><CSSTriangleBorder></CSSTriangleBorder>
      
      <CenterAlign>
        <FirstRow> 
          { weighted } out of 5 stars 
        </FirstRow>
        { ratings.map((rating, key) => <RatingsRow starNum={ rating[0] } amount={ rating[1] } total={ total } key={ key } />) }
        <LastLink>See all { total } reviews ></LastLink>
      </CenterAlign>

    </RatingsBox>
  );
};

export default RatingsGraphic;
