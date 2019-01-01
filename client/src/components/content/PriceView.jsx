import React from 'react';
import styled from 'styled-components';
import GrayPriceText from '../styledComponents/GrayPriceText.jsx';
import RedPriceText from '../styledComponents/RedPriceText.jsx';
import { primeImgURL } from '../helpers/urls.js';

const Price = styled.div`
  padding: 13px 0px;
`;

const primeImageStyle = {
  height: 15,
  width: 'auto',
};

const PriceView = ({ price, prime }) => (
  <Price>
    <GrayPriceText>Price:</GrayPriceText>
    <RedPriceText>${ price }</RedPriceText>
    &nbsp;{ prime ? <img style={ primeImageStyle } src={ primeImgURL }></img> : ''}
  </Price>
);

export default PriceView;
