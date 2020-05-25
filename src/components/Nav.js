import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: orange;
  display: flex;
  flex-direction: column;
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
