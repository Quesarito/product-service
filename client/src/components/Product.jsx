import React from 'react';
import PicturesView from './picture/PicturesView.jsx';
import TitleView from './content/TitleView.jsx';
import ReviewsView from './content/ReviewsView.jsx';
import DescriptionView from './content/DescriptionView.jsx';
import exampleData from '../exampleData.js';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import AmazonEmber from '../../styles/AmazonEmber_Rg.ttf';
import AmazonEmberBold from '../../styles/AmazonEmber_Bd.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${AmazonEmber}') format('truetype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${AmazonEmberBold}') format('truetype');
    font-weight: bold;
  }
  body {
    font-family: 'Amazon Ember', Arial, sans-serif;
  }
`;

const PicturesSection = styled.div`
  width: 550px;
  height: 600px; 
  left: 0px; 
  float: left;
`;

const ContentSection = styled.div`
  display: 'inline-block';
  margin-left: 550px;
  margin-right: 200px;
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
    // Amazon.com: Product name
    document.title = `Amazon.com: ${exampleData.name}`;
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <PicturesSection>
          <PicturesView pictureURLs={this.state.image_urls} />
        </PicturesSection>

        <ContentSection>
          <TitleView title={this.state.name} seller={this.state.seller} />
          <ReviewsView
            one={this.state.one_star_reviews}
            two={this.state.two_star_reviews}
            three={this.state.three_star_reviews}
            four={this.state.four_star_reviews}
            five={this.state.five_star_reviews}
            total={this.state.total_reviews}
            answered_questions={this.state.answered_questions} />
          <DescriptionView 
            price={this.state.versions.new.price} 
            prime={this.state.prime_eligible} 
            description={this.state.description} />
        </ContentSection>

      </div>
    );
  }
}

export default Product;
