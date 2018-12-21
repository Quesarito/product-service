import React from 'react';

const titleStyle = {
  fontSize: 21, 
  lineHeight: 1.3
};

const TitleView = ({ title, seller }) => (
  <div>
    <h1 style={titleStyle}>{ title }</h1>
    <p>by <a>{ seller }</a></p>
  </div>
);

export default TitleView;
