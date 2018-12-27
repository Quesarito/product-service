import React from 'react';
import Stars from './Stars.jsx';
import RatingsGraphic from './ratingsGraphic/RatingsGraphic.jsx';

const floatLeft = {
  float: 'left',
};

const StarsButton = ({ one, two, three, four, five, hovered, onMouseLeave, onMouseOver }) => (
  <div onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} style={floatLeft}>
    <Stars one={one} two={two} three={three} four={four} five={five} />
    { hovered ? <RatingsGraphic one={one} two={two} three={three} four={four} five={five} /> : ''}
  </div>
);

export default StarsButton;
