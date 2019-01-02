import styled from 'styled-components';

const Link = styled.a`
  color: rgb(0,102,192);
  text-decoration: none;
  :hover,
  :active {
    color: rgb(196, 85, 0);
    text-decoration: underline;
    cursor: pointer;
  }
`;

const LeftPaddedLink = styled(Link)`
  padding-left: 15px;
`;

const LastLink = styled(Link)`
  font-size: 12px;
`;

const RowLink = styled(Link)`
  padding-right: 5px;
`;

export {
  Link,
  LeftPaddedLink,
  LastLink,
  RowLink,
};
