// Importing React
import React from 'react';

// Importing Styled-Components
import { createGlobalStyle } from 'styled-components';
import PicturesSection from './styledComponents/PicturesSection.jsx';
import ContentSection from './styledComponents/ContentSection.jsx';

// Importing Components
import PicturesView from './picture/PicturesView.jsx';
import TitleView from './content/TitleView.jsx';
import ReviewsView from './content/ReviewsView.jsx';
import DescriptionView from './content/DescriptionView.jsx';

// Importing Styles (fonts)
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

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      description: [],
      seller: '',
      prime_eligible: false,
      versions: { 
        new: {
          price: 0,
        },
      },
      image_urls: [],
      expected_date_of_arrival: '',
      five_star_reviews: 0,
      four_star_reviews: 0,
      three_star_reviews: 0,
      two_star_reviews: 0,
      one_star_reviews: 0,
      total_reviews: 0,
      answered_questions: 0,
    };
    // This changes the title of the page (title in the browser tab) to:
    // Amazon.com: Product name
    document.title = `Amazon.com`;
  }

  componentDidMount() {
    fetch(`/api/products?id=${ Math.floor(Math.random() * 100) }`)
      .then(response => response.json())
      .then(([ product ]) => {
        this.setState({
          id: product.id,
          name: product.name,
          description: product.description,
          seller: product.seller,
          prime_eligible: product.prime_eligible,
          versions: product.versions,
          image_urls: product.image_urls,
          expected_date_of_arrival: product.expected_date_of_arrival,
          five_star_reviews: product.five_star_reviews,
          four_star_reviews: product.four_star_reviews,
          three_star_reviews: product.three_star_reviews,
          two_star_reviews: product.two_star_reviews,
          one_star_reviews: product.one_star_reviews,
          total_reviews: product.five_star_reviews + product.four_star_reviews + 
            product.three_star_reviews + product.two_star_reviews + product.one_star_reviews,
          answered_questions: product.answered_questions,
        });
        document.title = `Amazon.com: ${product.name}`;
      })
      .catch('ERROR FETCHING PRODUCT');
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
