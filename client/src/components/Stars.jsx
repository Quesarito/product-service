import React from 'react';
import RatingsGraphic from './RatingsGraphic.jsx';

const starsStyle = {float: 'left', backgroundColor: 'yellow'};

const Stars = ({ one, two, three, four, five, hovered, onMouseLeaveHandler, onMouseOverHandler }) => {
  return hovered ? 
    (<div onMouseLeave={onMouseLeaveHandler}>
      <RatingsGraphic one={one} two={two} three={three} four={four} five={five} />
    </div>)
    :
    (<div onMouseOver={onMouseOverHandler} style={starsStyle}>
      &#9734;&#9734;&#9734;&#9734;&#9734; &or; &nbsp;&nbsp;
    </div>)
};

export default Stars;
