import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  h1 {
    color: black;
    font-size: 21px;
    font-weight: 400; 
    line-height: 1.3;
  }
  .seller {
    font-size: 13;
    line-height: 1.46;
  }
  a,
  a:link,
  a:visited {
    color: rgb(0,102,192);
    text-decoration: none;
  } 
  a:hover,
  a:active {
    color: rgb(196, 85, 0);
    text-decoration: 'underlined';
    cursor: pointer;
  }
`;


const TitleView = ({ title, seller }) => (
  <Title>
    <h1>{ title }</h1>
    <p className="seller">by <a>{ seller }</a></p>
  </Title>
);

export default TitleView;
