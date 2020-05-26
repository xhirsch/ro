import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: orange;
  display: flex;
  flex-direction: column;

  & ul {
    list-style-type: none;

    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }

  & li {
    background: grey;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bio">Bio</Link>
        </li>
        <li>
          <a href="https://soundcloud.com/random-orchestra/">Soundcloud</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
