import React from 'react';
import styled from 'styled-components';
import PriceView from './PriceView.jsx';
import GrayLine from '../styledComponents/GrayLine.jsx';

const Description = styled.div`
font-size: 13px;
`;

const Paragraph = ({ paragraph }) => (<p>{ paragraph }</p>);

const DescriptionView = ({ price, prime, description}) => (
  <Description>
    <PriceView price={price} prime={prime} />
    {!prime ? '(Note: This item is not Prime eligible.)' : ''}
    { description.map(paragraph => <Paragraph paragraph={paragraph} />) }
    <GrayLine></GrayLine>
  </Description>
);

export default DescriptionView;
