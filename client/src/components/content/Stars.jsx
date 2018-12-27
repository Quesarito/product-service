import React from 'react';
import styled from 'styled-components';

const starsStyle = {
  background: 'yellow',
};

const Stars = ({ one, two, three, four, five }) => {
  return (
    <div style={starsStyle}>stars should go here</div>
  );
};

export default Stars;
