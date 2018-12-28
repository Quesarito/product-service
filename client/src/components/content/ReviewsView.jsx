import React from 'react';
import styled from 'styled-components';
import StarsButton from './StarsButton.jsx';
import GrayLine from '../styledComponents/GrayLine.jsx';
import Link from '../styledComponents/Link.jsx';

const SmallFont = styled.div`
  font-size: 13px;
  line-height: 1.46;
`;

const LeftPaddedLink = styled(Link)`
  padding-left: 15px;
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
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this)
  }

  onMouseLeaveHandler() {
    this.setState({ hovered: false });
  }

  onMouseOverHandler() {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    }
  }

  render() {
    return (
      <SmallFont>
        <StarsButton 
          one={this.state.one} 
          two={this.state.two} 
          three={this.state.three} 
          four={this.state.four} 
          five={this.state.five} 
          hovered={this.state.hovered} 
          onMouseOver={this.onMouseOverHandler} 
          onMouseLeave={this.onMouseLeaveHandler} />
        <LeftPaddedLink>{this.state.total} customer reviews</LeftPaddedLink> | <Link>{this.state.answered_questions} answered questions</Link>
        <GrayLine></GrayLine>
      </SmallFont>
    );
  }
}

export default ReviewsView;
