import React from 'react';

const ratingsGraphicStyle = {
  float: 'left',
  zIndex: 1,
  border: '1px solid #D3D3D3',
  borderRadius: 3,
  height: 90,
  width: 120,
};

const RatingsGraphic = ({ one, two, three, four, five }) => (
  <div style={ratingsGraphicStyle}>
    { one + two + three + four + five }
  </div>
);

export default RatingsGraphic;
