import React from 'react';
import styled, { keyframes } from 'styled-components';

const Bar = styled.button`
  margin-bottom: -1px;
  height: 17px;
  width: 120px;
  border-radius: 1px;
  background-color: rgba(83, 83, 83, 0.1);
  :focus {
    outline: none;
  }
  box-shadow: 1px 1px rgba(83, 83, 83, 0.3) inset;
`;

const FillingBar = styled.button`
  position: absolute;
  margin-left: -120px;
  height: 17px;
  border-radius: 1px;
  z-index: 2;
  background-color: rgb(255, 185, 10);
  border-color: rgba(185, 90, 0, 0.8);
  box-shadow: 0px 1px rgba(255, 195, 2, 1) inset;
  :focus {
    outline: none;
  }
`;

const fraction = (amount, total) => (amount / total * 120).toFixed(1).toString() + 'px';

const RatingsBar = ({ amount, total }) => {
  const fill = keyframes`
  from {
    width: 0px;
  }
  to {
    width: ${ fraction(amount, total) };
  }
`;

  const FractionFilledBar = styled(FillingBar)`
    animation: ${fill} 0.5s linear;
    animation-fill-mode: forwards;
  `;

  return (
    <span>
      <Bar></Bar>
      <FractionFilledBar></FractionFilledBar>
    </span>
  );
};

export default RatingsBar;
