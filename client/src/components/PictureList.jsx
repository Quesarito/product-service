import React from 'react';
import PictureIcon from './PictureIcon.jsx';

const PictureList = ({ pictureURLs, onHover }) => (
  <div>
    { pictureURLs.map((pictureURL, id) => <PictureIcon url={pictureURL} onHover={onHover} id={id} />) }
  </div>
);

export default PictureList;
