import React from 'react';
import { PictureModalBox, PictureModalBackground, PictureModalHeader, X,
  PictureModalIcon, PictureModalDescription, PictureModalSelectedIcon, imgDisplayed, imgIconStyle } from '../styledComponents/PictureModalBox.jsx';
import GrayLine from '../styledComponents/GrayLine.jsx';

class PictureModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idSelected: this.props.idSelected,
    };
    this.onIconClick = this.onIconClick.bind(this);
  }

  onIconClick(e) {
    this.setState({
      idSelected: Number(e.target.id),
    });
  }

  render() {
    document.body.style.overflow = 'hidden';

    return (
      <div>
        <PictureModalBackground onClick={ this.props.onXClick }></PictureModalBackground>

        <PictureModalBox>
          <PictureModalHeader>
            IMAGES <X onClick={ this.props.onXClick }>&times;</X>
          </PictureModalHeader>
          <GrayLine></GrayLine>
          
          <img style={ imgDisplayed } id={ this.state.idSelected } src={ this.props.pictureURLs[this.state.idSelected] }></img>

          <PictureModalDescription>
            <p>{ this.props.name }</p>
            { this.props.pictureURLs.map((url, id) => {
              return id === this.state.idSelected ? 
                <PictureModalSelectedIcon style={ imgIconStyle } src={ url } id={ id } key={ id } onClick={ this.onIconClick } />
              :
                <PictureModalIcon style={ imgIconStyle } src={ url } id={ id } key={ id } onClick={ this.onIconClick } />
             })
            }
          </PictureModalDescription>
        </PictureModalBox>
      </div>
    );
  }
}

export default PictureModal;
