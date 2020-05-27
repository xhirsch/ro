import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  & a {
    font-family: Amplitude-Bold;
    padding: 1rem;
    font-size: 1.25rem;
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
