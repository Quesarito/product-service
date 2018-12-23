import React from 'react';
import Stars from './Stars.jsx';

class ReviewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: props.one,
      two: props.two,
      three: props.three,
      four: props.four,
      five: props.five,
      total: props.total,
      answered_questions: props.answered_questions,
      hovered: false,
    };
  }

  onMouseLeaveHandler() {
    this.setState({ hovered: false });
  }

  onMouseOverHandler() {
    this.setState({ hovered: true });
  }

  render() {
    return (
      <div>
        <Stars 
          one={this.state.one} 
          two={this.state.two} 
          three={this.state.three} 
          four={this.state.four} 
          five={this.state.five} 
          hovered={this.state.hovered} 
          onMouseOverHandler={this.onMouseOverHandler.bind(this)} 
          onMouseLeaveHandler={this.onMouseLeaveHandler.bind(this)} />
        <p>{this.state.total} customer reviews | {this.state.answered_questions} answered questions</p>
      </div>
    );
  }
}

export default ReviewsView;
