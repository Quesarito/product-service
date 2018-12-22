import React from 'react';
import PictureIcon from './PictureIcon.jsx';

const PictureList = ({ pictureURLs, onHover, idSelected }) => (
  <div>
    { pictureURLs.map((pictureURL, id) => {
      return (<PictureIcon 
        url={pictureURL} 
        onHover={onHover} 
        id={id} 
        idSelected={idSelected} />)
      })
    }
  </div>
);

export default PictureList;
