import React from 'react';
import Product from '../client/src/components/Product.jsx';
import { shallow } from 'enzyme';

console.log(shallow);

describe('Product Component', async () => {
  // versions={exampleData.versions}

  beforeEach(() => {
    const product = shallow(<Product />);
  });

  it('has all properties it\'s instantiated with', () => {
    const productState = product.state();
    const keys = Object.keys(productState);

    keys.forEach(key => expect(productState[key]).toEqual(exampleData[key]));
  });

});
