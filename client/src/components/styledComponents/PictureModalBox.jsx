import styled from 'styled-components';

const PictureModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  overflow: hidden;
`;

const PictureModalBox = styled.div`
  position: fixed;
  top: 11%;
  bottom: 11%;
  left: 3%;
  right: 3%;
  z-index: 5;
  align-content: center;
  vertical-align: center;
  border-radius: 5px;
  padding: 25px;
  background-color: white;
`;

const PictureModalHeader = styled.span`
  position: relative;
  color: rgb(0, 47, 54);
  font-size: 15px;
  padding: 0px 20px 15px 20px;
`;

const X = styled.span`
  outline-color: orange;
  float: right;
  font-size: 25px;
  margin-top: -15px;
  :hover {
    cursor: pointer;
  }
`;

const PictureModalDescription = styled.span`
  color: rgb(83, 83, 83);
  width: 30%;
  p {
    font-size: 16px;
  }
`;

const PictureModalIcon = styled.img`
  border: 2px solid rgb(210, 210, 210);
  :hover {
    border: 2px solid rgb(0, 47, 54);
  }
`;

const PictureModalSelectedIcon = styled.img`
  border: 2px solid orange;
`;

const imgDisplayed = {
  float: 'left',
  padding: '20px',
  paddingLeft: '10%',
  width: '75%',
  maxHeight: 400,
  height: 'auto',
};

const imgIconStyle = {
  height: 50,
  width: 50,
};

export {
  PictureModalBox,
  PictureModalBackground,
  PictureModalHeader,
  X,
  PictureModalDescription,
  PictureModalIcon,
  PictureModalSelectedIcon,
  imgDisplayed,
  imgIconStyle,
};
