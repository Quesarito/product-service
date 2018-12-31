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
    let id = event.target.id;
    this.setState({
      idSelected: Number(id),
    });
  }

  render() {
    return (
      <div>
        <PictureList 
          pictureURLs={this.props.pictureURLs} 
          onHover={this.onIconHoverHandler}
          idSelected={this.state.idSelected} />
        <PictureDisplay pictureURL={this.props.pictureURLs[this.state.idSelected]} numPictures={this.props.pictureURLs.length} />
      </div>
    );
  }
};

export default PicturesView;
