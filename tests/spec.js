import React from 'react';
import Product from '../client/src/components/Product.jsx';
import PicturesView from '../client/src/components/picture/PicturesView.jsx';
import TitleView from '../client/src/components/content/Titleview.jsx';
import exampleData from './exampleData.js';
import { shallow } from 'enzyme';

describe('Product Component', () => {
  let ProductComponent;

  beforeEach(() => {
    ProductComponent = shallow(<Product />);
  });

  it('has stubs for all of its state properties when first initialized', () => {
    const productState = ProductComponent.state();
    expect(productState.id).toEqual(0);
    expect(productState.name).toEqual('');
    expect(Array.isArray(productState.description)).toEqual(true);
    expect(productState.seller).toEqual('');
    expect(productState.prime_eligible).toEqual(false);
    expect(typeof productState.versions === 'object').toBe(true);
    expect(productState.versions.new.price).toEqual(0);
    expect(Array.isArray(productState.image_urls)).toEqual(true);
    expect(productState.expected_date_of_arrival).toEqual('');
    expect(productState.five_star_reviews).toEqual(0);
    expect(productState.four_star_reviews).toEqual(0);
    expect(productState.three_star_reviews).toEqual(0);
    expect(productState.two_star_reviews).toEqual(0);
    expect(productState.one_star_reviews).toEqual(0);
    expect(productState.total_reviews).toEqual(0);
    expect(productState.answered_questions).toEqual(0);
  });

  it('renders the App styled component', () => {
    const AppStyledC = ProductComponent.find('App');
    expect(AppStyledC).toBeTruthy();
  });

  it('renders Pictures and Content Sections', () => {
    const AppStyledC = ProductComponent.find('App');
    const PicturesSectionStyledC = AppStyledC.find('PicturesSection');
    expect(PicturesSectionStyledC).toBeTruthy();
    const ContentSectionStyledC = AppStyledC.find('ContentSection');
    expect(ContentSectionStyledC).toBeTruthy();
  });
});


describe('PicturesView Component', () => {
  let PicturesViewComponent;

  beforeEach(() => {
    PicturesViewComponent = shallow(<PicturesView pictureURLs={ exampleData.image_urls } name={ exampleData.name } />);
  });

  it('has one stateful property: \'idSelected\'', () => {
    const picturesViewState = PicturesViewComponent.state();
    const keys = Object.keys(picturesViewState);
    expect(keys.length).toEqual(1);
    expect(picturesViewState.idSelected).toEqual(0);
  });

  it('contains two children components: \'PictureDisplay\' and \'PictureList\'', () => {
    expect(PicturesViewComponent.props().children.length).toEqual(2);
  });

  it('renders the PictureList and PictureDisplay components', () => {
    const PictureListC = PicturesViewComponent.find('PictureList');
    expect(PictureListC).toBeTruthy();
    const PictureDisplayC = PicturesViewComponent.find('PictureDisplay');
    expect(PictureDisplayC).toBeTruthy();
  });

  it('passes an array of \'pictureURLs\', an \'onHover\' function and an \'isSelected\' id to PictureList', () => {
    const PictureListC = PicturesViewComponent.find('PictureList');
    expect(Array.isArray(PictureListC.props().pictureURLs)).toEqual(true);
    expect(typeof PictureListC.props().onHover).toEqual('function');
    expect(PictureListC.props().idSelected).toEqual(0);
  });

  it('passes an array of \'pictureURLs\', an \'onHover\' function and an \'isSelected\' id to PictureDisplay', () => {
    const PictureDisplayC = PicturesViewComponent.find('PictureDisplay');
    expect(Array.isArray(PictureDisplayC.props().pictureURLs)).toEqual(true);
    expect(typeof PictureDisplayC.props().pictureURL).toEqual('string');
    expect(PictureDisplayC.props().idSelected).toEqual(0);
    expect(PictureDisplayC.props().name).toEqual('Incredible Concrete Towels');
  })
});

describe('TitleView Component', () => {
  it('renders the Title and Link styled component', () => {
    const TitleViewComponent = shallow(<TitleView title={'some title'} seller={'some seller'} />)
    const Title = TitleViewComponent.find('Title');
    expect(Title).toBeTruthy();
    const Link = TitleViewComponent.find('Link');
    expect(Link).toBeTruthy();
  });
});
