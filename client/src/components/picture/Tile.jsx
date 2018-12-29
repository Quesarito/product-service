import React from 'react';
import styled from 'styled-components';

const tileURL = 'https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369105_.gif';

// Images start at (x_0, y_0) = (58, 29), but the tile is 100 x 100 px2. Thus, we want
// the tile to appear at (x_0 + 50, y_0 + 50).
const imageOrigin = [58 + 50, 29 + 50];

const TileAndZoom = styled.div`
  z-index: 2;
`;

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xCoord: props.xCoord < imageOrigin[0] ? imageOrigin[0] : props.xCoord,
      yCoord: props.yCoord < imageOrigin[1] ? imageOrigin[1] : props.yCoord,
      hovered: true,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseMove(e) {
    let [newXCoord, newYCoord] = this.getCoordsInBounds(e.clientX, e.clientY);

    if (newXCoord === false || newYCoord === false) {
      this.props.changeProductDisplayHoveredState();
    } else {
      this.setState({
        xCoord: newXCoord,
        yCoord: newYCoord,
      });
    }
  }

  getCoordsInBounds(clientX, clientY) {
    let x = clientX < imageOrigin[0] ? imageOrigin[0] : clientX;
    x = x > 475 ? 475 : x;
    let y = clientY < imageOrigin[1] ? imageOrigin[1] : clientY;
    y = y > 475 ? 475 : y;
    return [x, y];
  }

  onMouseOut() {
    this.setState({
      hovered: false,
    })
    this.props.changeProductDisplayHoveredState();
  }

  toPixel(x) {
    return x.toString() + 'px';
  }

  render() {
    let x = this.state.xCoord;
    let y = this.state.yCoord;

    // const tileStyle = {
    //   position: 'absolute',
    //   height: 100,
    //   width: 100,
    //   left: x - 100,
    //   top: y - 50,
    //   zIndex: 4,
    // }; //src={ tileURL } 

    const zoomStyle = {
      position: 'absolute',
      height: 500,
      width: 400,
      left: 550,
      top: 5,
      background: `white url(${ this.props.pictureURL }) -${ this.toPixel(1.5 * (x - 150)) } -${ this.toPixel(1.5 * (y - 67.5)) } no-repeat`,
      backgroundSize: 1000,
      boxShadow: '1px 1px 2px 1px rgba(100, 100, 100, 0.2)',
      zIndex: 5,
    };

    return (this.state.hovered ? 
      <TileAndZoom>
        <div onMouseMove={ this.onMouseMove } onMouseOut={ this.onMouseOut }></div>
        <div style={ zoomStyle }></div>
      </TileAndZoom>
      : ''
    );
  }
};

export default Tile;
