import React from 'react';
import { amazonSpriteURL } from '../helpers/urls.js';
import StarSpan from '../styledComponents/StarSpan.jsx';

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
    backgroundColor: `white`,
    backgroundImage: `url(${ amazonSpriteURL })`,
    backgroundPosition: `${ getPixelShift(difference, Number(weighted)) } -326px`,
    backgroundSize: 325,
    backgroundRepeat: 'no-repeat',
    zIndex: 4,
  };

  return <StarSpan style={ starsImgStyle }></StarSpan>;
};

export default Stars;
