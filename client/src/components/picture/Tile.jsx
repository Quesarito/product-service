import React from 'react';
import styled from 'styled-components';

const tileURL = 'https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369105_.gif';
const imageOrigin = [110, 60];

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
    let [newXCoord, newYCoord] = this.getCoordinatesWithinBounds(e.clientX, e.clientY);
    this.setState({
      xCoord: newXCoord,
      yCoord: newYCoord,
    });
  }

  getCoordinatesWithinBounds(clientX, clientY) {
    let x = clientX < imageOrigin[0] ? imageOrigin[0] : clientX;
    x = x > 475 ? 475 : x;
    let y = clientY < imageOrigin[1] ? imageOrigin[1] : clientY;
    y = y > 410 ? 410 : y;
    return [x, y];
  }

  onMouseOut() {
    this.setState({
      hovered: false,
    })
    this.props.changeProductDisplayHoveredState();
  }

  toPixel(a) {
    return a.toString() + 'px';
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


//${ getPixelShift(difference, Number(weighted)) }

export default Tile;
