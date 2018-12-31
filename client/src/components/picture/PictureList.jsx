import React from 'react';
import PictureIcon from './PictureIcon.jsx';
import styled from 'styled-components';

const LeftAlign = styled.div`
  left: 0;
`;

const PictureList = ({ pictureURLs, onHover, idSelected }) => (
  <LeftAlign>
    { pictureURLs.map((pictureURL, id) => {
      return (<PictureIcon 
        url={ pictureURL } 
        onHover={ onHover } 
        id={ id } key={ id }
        idSelected={ idSelected } />);
      })
    }
  </LeftAlign>
);

export default PictureList;
