import React from 'react';
import styled from 'styled-components';
import Caption from '../styledComponents/Caption.jsx';
import PrePicture from '../styledComponents/PrePicture.jsx';
import TileAndZoom from './TileAndZoom.jsx';
import PictureModal from './PictureModal.jsx';

class PictureDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      tileCenterCoords: [0, 0],
      clicked: false,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeaveImg = this.onMouseLeaveImg.bind(this);
    this.displayPictureModal = this.displayPictureModal.bind(this);
    this.removePictureModal = this.removePictureModal.bind(this);
  }

  onMouseOver(e) {
    if (this.state.hovered === false) {
      this.setState({
        hovered: true,
        tileCenterCoords: [e.clientX, e.clientY],
      });
    } else {
      this.setState({
        tileCenterCoords: [e.clientX, e.clientY],
      });
    }
  }

  onMouseLeaveImg() {
    this.setState({
      hovered: false,
    });
  }

  displayPictureModal() {
    this.setState({
      hovered: false,
      clicked: true,
    });
  }

  removePictureModal() {
    document.body.style.overflow = 'visible';
    this.setState({
      clicked: false,
    });
  }

  render() {
    const Picture = styled(PrePicture)`
      margin-top: calc(-1 * ${ this.props.numPictures } * 55px);
    `;

    return  (
      <Picture>
        <img onMouseEnter={ this.onMouseOver } onMouseOver={ this.onMouseOver } onMouseLeave={ this.onMouseLeaveImg }
          src={ this.props.pictureURL } ></img>
        { this.state.hovered && this.state.tileCenterCoords ?
          <TileAndZoom xCoord={ this.state.tileCenterCoords[0] } yCoord={ this.state.tileCenterCoords[1] }
            changeProductDisplayHoveredState={ this.onMouseLeaveImg } pictureURL={ this.props.pictureURL }
            displayPictureModal={ this.displayPictureModal } numPictures={ this.props.numPictures } />
          : ''
        }
        { this.state.clicked ?
          <PictureModal idSelected={ this.props.idSelected } onXClick={ this.removePictureModal } name={ this.props.name }
            pictureURLs={ this.props.pictureURLs } />
          : ''
        }
        <Caption>{ this.state.hovered ? 'Click image to open expanded view' : 'Roll over image to zoom in' }</Caption>
      </Picture>
    );
  }
}

export default PictureDisplay;
