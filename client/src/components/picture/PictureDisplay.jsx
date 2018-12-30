import React from 'react';
import styled from 'styled-components';

const Caption = styled.div`
  text-align: center;
  clear: both;
  font-size: 13px;
  line-height: 19px;
  color: rgb(85, 85, 85);
`;

const PrePicture = styled.div`
  img {
    margin-left: 50px; 
    height: 460px;
    width: auto;
    max-width: 450px;
    align-content: center;
    width: auto;
  }
`;

const PictureDisplay = ({ pictureURL, numPictures }) => {
  // the Picture styled component is inside of this PictureDisplay component
  // because if the entire set of pictures changes (e.g. a new product itself
  // is rendered), then the number of pictures may not be the same, and we want
  // for the PictureDisplay to be well aligned with the PictureList and Title 
  const Picture = styled(PrePicture)`
    margin-top: calc(-1 * ${numPictures} * 53px);
  `;

  return (
    <Picture>
      <img src={ pictureURL }></img>
      <Caption>Roll over image to zoom in</Caption>
    </Picture>
  );
};

export default PictureDisplay;
