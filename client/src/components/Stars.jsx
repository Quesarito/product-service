import React from 'react';

const Stars = ({ one, two, three, four, five }) => {
  return (
    <div>
      <p>One star reviews {one}</p>
      <p>Two star reviews {two}</p>
      <p>Three star reviews {three}</p>
      <p>Four star reviews {four}</p>
      <p>Five star reviews {five}</p>
    </div>
  );
};

export default Stars;
