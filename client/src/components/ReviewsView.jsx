import React from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';
import GrayLine from './GrayLine.jsx';
import Link from './Link.jsx';

const SmallFont = styled.div`
  font-size: 13px;
  line-height: 1.46;
`;

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
      <SmallFont>
        <Stars 
          one={this.state.one} 
          two={this.state.two} 
          three={this.state.three} 
          four={this.state.four} 
          five={this.state.five} 
          hovered={this.state.hovered} 
          onMouseOverHandler={this.onMouseOverHandler.bind(this)} 
          onMouseLeaveHandler={this.onMouseLeaveHandler.bind(this)} />
        <Link>{this.state.total} customer reviews</Link> | <Link>{this.state.answered_questions} answered questions</Link>
        <GrayLine></GrayLine>
      </SmallFont>
    );
  }
}

export default ReviewsView;
