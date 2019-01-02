import React from 'react';
import Stars from './Stars.jsx';
import RatingsGraphic from './ratingsGraphic/RatingsGraphic.jsx';

const floatLeft = {
  float: 'left',
};

const weighted = (one, two, three, four, five, total) => {
  let weightedAvg = (one * 1 + two * 2 + three * 3 + four * 4 + five * 5) / total;
  return weightedAvg.toFixed(1);
};

const StarsButton = ({ one, two, three, four, five, hovered, onMouseLeave, onMouseOver }) => {
  const total = one + two + three + four + five;
  const weightedAvgStr = weighted(one, two, three, four, five, total);
  
  return (
    <div onMouseLeave={ onMouseLeave } onMouseOver={ onMouseOver } style={ floatLeft }>
      <Stars weighted={ weightedAvgStr } />
      { hovered ? 
        <RatingsGraphic one={ one } two={ two } three={ three } four={ four } five={ five } weighted={ weightedAvgStr } />
        : ''
      }
    </div>
  );
};

export default StarsButton;
