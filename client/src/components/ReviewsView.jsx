import React from 'react';
import Stars from './Stars.jsx';

const ReviewsView = ({ one, two, three, four, five, total }) => (
  <div>
    <Stars one={one} two={two} three={three} four={four} five={five} />
    <p>{total} customer reviews</p>
  </div>
);

export default ReviewsView;
