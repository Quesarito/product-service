import React from 'react';

const PictureDisplay = ({ pictureURL, numPictures }) => {
  let pictureDisplayStyle = {
    marginLeft: 50, 
    height: 'auto',
    float: 'left',
    width: 540,
    marginTop: -1 * numPictures * 60 + 80,
  };

  return (
    <div>
      <img style={pictureDisplayStyle} src={ pictureURL }></img>
      Roll over image to zoom in
    </div>
  );
};

export default PictureDisplay;
