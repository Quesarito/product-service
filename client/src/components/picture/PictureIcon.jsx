import React from 'react';
import Icon from '../styledComponents/Icon.jsx';

const PictureIcon = ({ url, onHover, id, idSelected }) => (
  <Icon>
    <img className={id === idSelected ? 'displayed' : ''} src={url} onMouseOver={onHover} id={id} ></img>
  </Icon>
);

export default PictureIcon;
