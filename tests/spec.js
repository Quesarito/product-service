import React from 'react';
import Product from '../client/src/components/Product.jsx';
import PicturesView from '../client/src/components/PicturesView.jsx';
import TitleView from '../client/src/components/Titleview.jsx';
import exampleData from './exampleData.js';
import { shallow } from 'enzyme';

describe('Product Component', () => {
  let ProductComponent;

  beforeEach(() => {
    ProductComponent = shallow(<Product />);
  });

  it('has all properties it\'s instantiated with', () => {
    const productState = ProductComponent.state();
    const keys = Object.keys(productState);
    keys.forEach(key => {
      expect(productState[key]).toEqual(exampleData[key]);
    });
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
    PicturesViewComponent = shallow(
      <PicturesView pictureURLs={exampleData.image_urls} />
    );
  });

  it('has three stateful properties', () => {
    const picturesViewState = PicturesViewComponent.state();
    const keys = Object.keys(picturesViewState);
    expect(keys.length).toEqual(3);
  });

  it('has an array of image urls', () => {
    const picturesViewState = PicturesViewComponent.state();
    expect(Array.isArray(picturesViewState.pictures)).toEqual(true);
    expect(picturesViewState.pictures.length > 1).toEqual(true);
    for (let i = 0; i < picturesViewState.pictures.length; i += 1) {
      expect(picturesViewState.pictures[i]).toContain('https://');
    }
  });

  it('renders the PictureList and PictureDisplay components', () => {
    const PictureListC = PicturesViewComponent.find('PictureList');
    expect(PictureListC).toBeTruthy();
    const PictureDisplayC = PicturesViewComponent.find('PictureDisplay');
    expect(PictureDisplayC).toBeTruthy();
  });

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
