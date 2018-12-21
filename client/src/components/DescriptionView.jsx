import React from 'react';

const Paragraph = ({ paragraph }) => (<p>{ paragraph }</p>);

const DescriptionView = ({ description }) => (
  <div style={{fontSize: 13}}>
    { description.map(paragraph => <Paragraph paragraph={paragraph} />) }
  </div>
);

export default DescriptionView;
