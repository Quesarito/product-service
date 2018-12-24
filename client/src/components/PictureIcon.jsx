import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  img {
    height: 40px;
    width: 40px;
    padding-bottom: 7px;
  }
  .displayed {
    outline-style: solid;
    outline-color: red;
  }
`;

const PictureIcon = ({ url, onHover, id, idSelected }) => (
  <Icon>
    <img className={id === idSelected ? 'displayed' : ''} src={url} onMouseOver={onHover} id={id} ></img>
  </Icon>
);

export default PictureIcon;
