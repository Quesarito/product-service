import React from 'react';

const PictureDisplay = ({ pictureURL }) => {
  return (
    <div>
      <img src={ pictureURL }></img>
    </div>
  );
};

export default PictureDisplay;
