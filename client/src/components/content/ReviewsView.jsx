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
          one={this.props.one}
          two={this.props.two}
          three={this.props.three}
          four={this.props.four}
          five={this.props.five}
          hovered={this.state.hovered}
          onMouseOver={this.onMouseOverHandler}
          onMouseLeave={this.onMouseLeaveHandler} />
        <LeftPaddedLink>{this.props.one + this.props.two + this.props.three + this.props.four + this.props.five} customer reviews</LeftPaddedLink>
          &nbsp;| <Link>{this.props.answered_questions} answered questions</Link>
        <GrayLine></GrayLine>
      </SmallFont>
    );
  }
}

export default ReviewsView;
