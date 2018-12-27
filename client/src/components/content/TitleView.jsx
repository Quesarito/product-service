import React from 'react';
import styled from 'styled-components';
import Link from '../styledComponents/Link.jsx';

const Title = styled.div`
  h1 {
    color: black;
    font-size: 21px;
    font-weight: 400;
    line-height: 1.3px;
    padding-bottom: 5px;
  }
  .seller {
    font-size: 13px;
    line-height: 1.46;
  }
`;

const TitleView = ({ title, seller }) => (
  <Title>
    <h1>{ title }</h1>
    <p className="seller">by <Link>{ seller }</Link></p>
  </Title>
);

export default TitleView;
