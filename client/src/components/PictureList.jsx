import React from 'react';
import PictureIcon from './PictureIcon.jsx';

const PictureList = ({ pictureURLs }) => (
  <div>
    { pictureURLs.map(pictureURL => <PictureIcon url={pictureURL} />) }
  </div>
);

export default PictureList;
