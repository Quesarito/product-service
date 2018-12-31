import React from 'react';
import styled from 'styled-components';

const tileURL = 'https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369105_.gif';
const minBound = [110, 60];
const maxBound = [475, 410];

const TileAndZoom = styled.div`
  z-index: 2;
`;

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xCoord: Math.max(props.xCoord, minBound[0]),
      yCoord: Math.max(props.yCoord, minBound[1]),
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
    let x = Math.min(Math.max(clientX, minBound[0]), maxBound[0]);
    let y = Math.min(Math.max(clientY, minBound[1]), maxBound[1]);
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

    const tileStyle = {
      position: 'absolute',
      height: 125,
      width: 100,
      left: x - 100,
      top: y - 67.5,
    };

    const zoomStyle = {
      position: 'absolute',
      height: 500,
      width: 400,
      left: 550,
      top: 5,
      backgroundColor: 'white',
      backgroundImage: `url(${ this.props.pictureURL })`,
      backgroundPosition: `-${ this.toPixel(1.5 * (x - 150)) } -${ this.toPixel(1.5 * (y - 67.5)) }`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 900,
      boxShadow: '1px 1px 2px 1px rgba(100, 100, 100, 0.2)',
      zIndex: 5,
    };

    return (this.state.hovered ? 
      <TileAndZoom>
        <img src={ tileURL } style={ tileStyle } 
          onMouseMove={ this.onMouseMove } onMouseOut={ this.onMouseOut }></img>
        <div style={ zoomStyle } onMouseOver={ this.onMouseOut } ></div>
      </TileAndZoom>
      : ''
    );
  }
};

export default Tile;
