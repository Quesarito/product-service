import React from 'react';
import PictureList from './PictureList.jsx';
import PictureDisplay from './PictureDisplay.jsx';

class PicturesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // idSelected is the ID of the large image that is currently displayed
      idSelected: 0,
    }
    this.onIconHoverHandler = this.onIconHoverHandler.bind(this);
  }

  onIconHoverHandler(event) {
    this.setState({
      idSelected: Number(event.target.id),
    });
  }

  render() {
    return (
      <div>
        <PictureList 
          pictureURLs={ this.props.pictureURLs }
          onHover={ this.onIconHoverHandler }
          idSelected={ this.state.idSelected } />
        <PictureDisplay
          pictureURLs={ this.props.pictureURLs }
          pictureURL={ this.props.pictureURLs[this.state.idSelected] }
          numPictures={ this.props.pictureURLs.length }
          idSelected={ this.state.idSelected }
          name={ this.props.name } />
      </div>
    );
  }
};

export default PicturesView;
