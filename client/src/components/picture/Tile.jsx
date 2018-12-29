import React from 'react';
import styled from 'styled-components';

const tileURL = 'https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369105_.gif';
// Images start at (x_0, y_0) = (58, 29), but the tile is 100 x 100 px2. Thus, we want
// the tile to appear at (x_0 + 50, y_0 + 50).
const imageOrigin = [58 + 50, 29 + 50];

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
    x = x > 500 ? 500 : x;
    let y = clientY < imageOrigin[1] ? imageOrigin[1] : clientY;
    y = y > 500 ? 500 : y;
    return [x, y];
  }

  onMouseOut() {
    this.setState({
      hovered: false,
    })
    this.props.changeProductDisplayHoveredState();
  }

  render() {
    const tileStyle = {
      position: 'absolute',
      height: 100,
      width: 100,
      left: this.state.xCoord - 100,
      top: this.state.yCoord - 50,
    };

    return (this.state.hovered ? 
      <img src={ tileURL } style={ tileStyle } 
        onMouseMove={ this.onMouseMove } onMouseOut={ this.onMouseOut }></img>
      : ''
    );
  }
};

// {/*...
        // {/*onMouseLeave={ this.state.onMouseLeave */}


export default Tile;