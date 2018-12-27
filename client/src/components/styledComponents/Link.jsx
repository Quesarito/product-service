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

export default Link;
