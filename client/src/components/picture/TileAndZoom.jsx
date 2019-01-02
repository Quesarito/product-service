import React from 'react';
import { tileURL } from '../helpers/urls.js';
import TileAndZoomStyle from '../styledComponents/TileAndZoomStyle.jsx';

const minBoundary = [110, 60];
const maxBoundary = [475, 410];

class TileAndZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xCoord: Math.max(props.xCoord, minBoundary[0]),
      yCoord: Math.max(props.yCoord, minBoundary[1]),
      hovered: true,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onTileClick = this.onTileClick.bind(this);
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
    const x = Math.min(Math.max(clientX, minBoundary[0]), maxBoundary[0]);
    const y = Math.min(Math.max(clientY, minBoundary[1]), maxBoundary[1]);
    return [x, y];
  }

  onMouseOut() {
    this.setState({
      hovered: false,
    })
    this.props.changeProductDisplayHoveredState();
  }

  onTileClick() {
    this.props.displayPictureModal();
  }

  toPixel(x) {
    return x.toString() + 'px';
  }

  render() {
    const x = this.state.xCoord;
    const y = this.state.yCoord;

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
      <TileAndZoomStyle>
        <img src={ tileURL } style={ tileStyle } onMouseMove={ this.onMouseMove }
          onMouseOut={ this.onMouseOut } onClick={ this.onTileClick }></img>
        <div style={ zoomStyle } onMouseOver={ this.onMouseOut } ></div>
      </TileAndZoomStyle>
      : ''
    );
  }
};

export default TileAndZoom;
