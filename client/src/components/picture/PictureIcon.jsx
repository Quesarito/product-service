import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  img {
    height: 40px;
    width: 40px;
    margin-bottom: 6.5px;
    border: 1px rgba(0, 0, 0, 0.3) solid;
    border-radius: 2px;
  }
  .displayed { 
    border: 1px rgb(245, 120, 0) solid;
    box-shadow: 1px 1px 3px 2px rgba(177, 39, 4, 0.2);
  }
`;

const PictureIcon = ({ url, onHover, id, idSelected }) => (
  <Icon>
    <img className={id === idSelected ? 'displayed' : ''} src={url} onMouseOver={onHover} id={id} ></img>
  </Icon>
);

export default PictureIcon;
