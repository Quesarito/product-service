import React from 'react';
import styled from 'styled-components';

const primeImgURL = 'https://sguru.org/wp-content/uploads/2018/02/small-and-light-prime-logo._V509606070_.png';

const Price = styled.div`
  padding: 13px 0px;
`;

const Gray = styled.span`
  vertical-align: text-top;
  color: rgb(85, 85, 85);
  font-size: 12px;
  padding-right: 5px;
`;

const Red = styled.span`
  color: rgb(177,39,4);
  margin-top: 50px;
  font-size: 17px;
`;

const primeStyle = {
  height: 15,
  width: 'auto',
};

const PriceView = ({ price, prime }) => (
  <Price>
    <Gray>Price:</Gray>
    <Red>${price}</Red>
    &nbsp;{prime ? <img style={primeStyle} src={primeImgURL}></img> : ''}
  </Price>
);

export default PriceView;
