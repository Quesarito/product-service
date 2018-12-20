import React from 'react';
import PicturesView from './PicturesView.jsx';
import ReviewsView from './ReviewsView.jsx';
import exampleData from '../exampleData.js';

const redBorder = {
  borderColor: 'red',
  borderStyle: 'solid', 
  borderWidth: 1,
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: exampleData.id,
      name: exampleData.name,
      description: exampleData.description,
      prime_eligible: exampleData.prime_eligible,
      versions: exampleData.versions,
      image_urls: exampleData.image_urls,
      expected_date_of_arrival: exampleData.expected_date_of_arrival,
      five_star_reviews: exampleData.five_star_reviews,
      four_star_reviews: exampleData.four_star_reviews,
      three_star_reviews: exampleData.three_star_reviews,
      two_star_reviews: exampleData.two_star_reviews,
      one_star_reviews: exampleData.one_star_reviews,
      total_reviews: exampleData.total_reviews,
      answered_questions: exampleData.answered_questions,
    };
  }


  render() {
    const picturesViewStyle = {
      width: 600,
      height: 600, 
      left: 0, 
      float: 'left',
    };

    return (
      <div>
        <div style={Object.assign(Object.assign({}, picturesViewStyle), redBorder)}>
          <PicturesView pictureURLs={this.state.image_urls} />
        </div>
        <div style={{display: 'inline-block'}}>
          <h1>{this.state.name}</h1>
          <ReviewsView
            one={this.state.one_star_reviews}
            two={this.state.two_star_reviews}
            three={this.state.three_star_reviews}
            four={this.state.four_star_reviews}
            five={this.state.five_star_reviews}
            total={this.state.total_reviews} />
        </div>
        <p>Price: ${this.state.versions.new.price}</p>
        <p>{this.state.description}</p> 
      </div>
    );
  }
}

export default Product;
