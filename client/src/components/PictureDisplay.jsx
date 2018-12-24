import React from 'react';
import styled from 'styled-components';

const PictureDisplay = ({ pictureURL, numPictures }) => {
  const Picture = styled.div`
    img {
      margin-left: 50px; 
      height: 500px;
      float: left;
      width: auto;
      margin-top: calc(-1 * ${numPictures} * 60px + 30px);
    }
  `;

  return (
    <Picture>
      <img src={ pictureURL }></img>
      Roll over image to zoom in
    </Picture>
  );
};

export default PictureDisplay;
