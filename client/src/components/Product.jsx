import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 'Team Quesarito'
    };
  }

  render() {
    return (
      <div>
        {this.state.product}
      </div>
    );
  }
}

export default Product;
