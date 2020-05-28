import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  background: yellow;
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    font-family: Amplitude-Bold;
    padding: 1rem;
    font-size: 3rem;
    text-decoration: none;
    color: #daff33;
    transition: all 0.5s ease-in-out 0s;

    &:hover {
      background: #ff5833;
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      {/* <Link to="/">Home</Link>
      <Link to="/bio">Bio</Link> */}
      <a href="https://soundcloud.com/random-orchestra/" target="_blank">
        Soundcloud
      </a>
    </StyledNav>
  );
};

export default Nav;
