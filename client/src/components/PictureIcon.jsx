import React from 'react';

const iconStyle = {
  height: 40,
  width: 40,
  paddingBottom: 7,
};

const PictureIcon = ({ url, onHover, id }) => (
  <div>
    <img style={iconStyle} src={url} onMouseOver={onHover} id={id} ></img>
  </div>
);

export default PictureIcon;
