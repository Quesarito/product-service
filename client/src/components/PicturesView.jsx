import React from 'react';
import PictureList from './PictureList.jsx';
import PictureDisplay from './PictureDisplay.jsx';

class PicturesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: props.pictureURLs,
      current: props.pictureURLs[0]
    }
  }

  onIconHoverHandler(event) {
    let id = event.target.id;

    this.setState({
      current: this.state.pictures[id]
    })
  }

  render() {
    const pictureDisplayStyle = {
      marginLeft: 50, 
      marginTop: (-1 * this.state.pictures.length * 60 + 100), 
      float: 'left',
    };

    return (
      <div>
        <div style={{left: 0}}>
          <PictureList pictureURLs={this.state.pictures} onHover={this.onIconHoverHandler.bind(this)} />
        </div>
        <div style={pictureDisplayStyle}>
          <PictureDisplay pictureURL={this.state.current} />
        </div>
      </div>
    );
  }
};

export default PicturesView;
