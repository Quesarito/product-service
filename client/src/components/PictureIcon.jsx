import React from 'react';

const iconStyle = {
  height: 40,
  width: 40,
};

const PictureIcon = ({ url }) => (
  <div>
    <img style={iconStyle} src={url}></img>
  </div>
);

export default PictureIcon;
