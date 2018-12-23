import React from 'react';

const iconStyle = {
  height: 40,
  width: 40,
  paddingBottom: 7,
};

const selectedStyle = {
  outlineStyle: 'solid',
  outlineColor: 'red',
};

const PictureIcon = ({ url, onHover, id, idSelected }) => (
  <div>
    <img style={id === idSelected ? Object.assign({}, iconStyle, selectedStyle) : iconStyle} src={url} onMouseOver={onHover} id={id} ></img>
  </div>
);

export default PictureIcon;
