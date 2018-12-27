import React from 'react';
import styled from 'styled-components';

const amazonSprite = 'https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_2x-13acd72bb22e0c502de00d0afe21c494871da686._V2_.png';

const Star = styled.span`
  height: 10px;
  width: 120px;
  border: 10px rgba(0, 0, 0, 0) solid;
  border-bottom: 5px;
  border-left: 0px;
  padding-right: 67px;
`;

const getDifference = weighted => Number(weighted) - Math.floor(Number(weighted));
const toPixel = shift => shift.toString() + 'px';

const getPixelShift = (difference, weighted) => {
  let shift;

  if (difference > 0.74) {
    shift = -80 + (Math.ceil(weighted) * 15);
    shift = Math.ceil(weighted) === 4 ? -4 : shift;
    return toPixel(shift);

  } else if (0.26 <= difference && difference <= 0.74) {
    shift = -227 + (Math.floor(weighted) * 15);
    return toPixel(shift);

  } else if (difference <= 0.26) {
    shift = -80 + (Math.floor(weighted) * 15);
    return toPixel(shift);
  }
};

const Stars = ({ weighted }) => {
  const difference = getDifference(weighted);

  const starsImgStyle = {
    height: 50,
    width: 10,
    background: `white url(${ amazonSprite }) ${ getPixelShift(difference, Number(weighted)) } -326px`,
    backgroundSize: 325,
    zIndex: 4,
  };

  return (
    <Star style={ starsImgStyle }></Star>
  );
};

export default Stars;
