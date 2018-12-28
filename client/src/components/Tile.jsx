import React from 'react';
import styled from 'styled-components';

const tileURL = 'https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369105_.gif';
const imageOrigin = [58, 29];

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xCoord: props.xCoord < imageOrigin[0] + 50 ? this.state.xCoord : props.xCoord,
      yCoord: props.yCoord < imageOrigin[1] + 50 ? this.state.yCoord : props.yCoord,
      onMouseLeave: props.onMouseLeave,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(e) {
    let newXCoord = e.clientX < imageOrigin[0] + 50 ? this.state.xCoord : e.clientX;
    let newYCoord = e.clientY < imageOrigin[1] + 50 ? this.state.yCoord : e.clientY;

    this.setState({
      xCoord: newXCoord,
      yCoord: newYCoord,
    });
  }

  render() {
    const tileStyle = {
      position: 'absolute',
      height: 100,
      width: 100,
      left: this.state.xCoord - 100,
      top: this.state.yCoord - 50,
    };

    return (
      <img
        src={ tileURL }
        style={ tileStyle }
        onMouseMove={ this.onMouseMove }
        onMouseLeave={ this.state.onMouseLeave }>
      </img>
    );
  }
};


export default Tile;