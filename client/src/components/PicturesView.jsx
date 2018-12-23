import React from 'react';
import PictureList from './PictureList.jsx';
import PictureDisplay from './PictureDisplay.jsx';

class PicturesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: props.pictureURLs,
      current: props.pictureURLs[0],
      idSelected: 0,
    }
  }

  onIconHoverHandler(event) {
    let id = event.target.id;
    this.setState({
      current: this.state.pictures[id],
      idSelected: Number(id),
    });
  }

  render() {
    return (
      <div>
        <div style={{left: 0}}>
          <PictureList 
            pictureURLs={this.state.pictures} 
            onHover={this.onIconHoverHandler.bind(this)}
            idSelected={this.state.idSelected} />
        </div>
        <div>
          <PictureDisplay pictureURL={this.state.current} numPictures={this.state.pictures.length} />
        </div>
      </div>
    );
  }
};

export default PicturesView;
