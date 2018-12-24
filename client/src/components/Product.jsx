import React from 'react';
import PicturesView from './PicturesView.jsx';
import TitleView from './TitleView.jsx';
import ReviewsView from './ReviewsView.jsx';
import PriceView from './PriceView.jsx';
import DescriptionView from './DescriptionView.jsx';
import exampleData from '../exampleData.js';
import styled from 'styled-components';

const App = styled.div`
  font-family: Roboto, Arial, sans-serif;
  .red-border {
    border-color: red;
    border-style: solid; 
    border-width: 1px;
  }
  .pictures-section {
    width: 600px;
    height: 600px; 
    left: 0px; 
    float: left;
  }
  .line {
    border-bottom: 1px gray solid;
  }
`;

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: exampleData.id,
      name: exampleData.name,
      description: exampleData.description,
      seller: exampleData.seller,
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
    // This changes the title of the page (title in the browser tab) to:
    // Amazon.com: Whatever product name
    document.title = `Amazon.com: ${exampleData.name}`;
  }

  render() {
    return (
      <App>
        <div className="pictures-section red-border">
          <PicturesView pictureURLs={this.state.image_urls} />
        </div>
        <div>
          <div style={{display: 'inline-block'}}>
            <TitleView title={this.state.name} seller={this.state.seller} />
            <ReviewsView
              one={this.state.one_star_reviews}
              two={this.state.two_star_reviews}
              three={this.state.three_star_reviews}
              four={this.state.four_star_reviews}
              five={this.state.five_star_reviews}
              total={this.state.total_reviews}
              answered_questions={this.state.answered_questions} />
            <div className="line"></div>
          </div>
          <PriceView price={this.state.versions.new.price} />
          <DescriptionView description={this.state.description} />
          <div className="line"></div>
        </div>
      </App>
    );
  }
}

export default Product;
