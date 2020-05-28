import React, { Suspense } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Canvas } from 'react-three-fiber';
import { OrbitControls, PositionalAudio } from 'drei';

import AUDIO from './components/AUDIO';
import Bio from './components/Bio';
import Home from './components/Home';
// import Nav from './components/Nav';

const StyledApp = styled.div`
  background: #5b33ff;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Soundcloud = styled.button`
  width: 100%;
  height: 100%;
  grid-colum: 1 / -1;
  background: #8d33ff;
  font-family: Amplitude-Bold;
  text-transform: uppercase;
  font-size: 3rem;
  color: #daff33;
  transition: all 0.5s ease-in-out 0s;

  &:hover {
    background: #ff5833;
  }
`;

const Nav = styled.div`
  grid-column: 2 / -1;
`;

function App() {
  return (
    <StyledApp>
      {/* <Router>
        <Switch>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Nav />
      </Router> */}
      <Bio />
      <Nav />
      <Soundcloud>
        <a href="https://soundcloud.com/random-orchestra/" target="_blank">
          Soundcloud
        </a>
      </Soundcloud>
    </StyledApp>
  );
}

export default App;
