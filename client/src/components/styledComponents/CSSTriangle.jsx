import styled from 'styled-components';

const CSSTriangle = styled.span`
  z-index: 3;
  background: rgba(0, 0, 0, 0);
  width: 0px;
  height: 0px;
  border: 9.5px solid rgba(0, 0, 0, 0);
  border-bottom-color: white;
  margin-left: 107px;
  margin-top: -19px;
  position: absolute;
`;

const CSSTriangleBorder = styled.span`
  z-index: 2;
  background: rgba(0, 0, 0, 0);
  width: 0px;
  height: 0px;
  border: 11.5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(211, 211, 211, 0.8);
  margin-left: 105px;
  margin-top: -23.5px;
  position: absolute;
`;

export {
  CSSTriangle,
  CSSTriangleBorder,
};
