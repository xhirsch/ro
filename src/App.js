import React, { Suspense } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Canvas } from 'react-three-fiber';
import { OrbitControls, PositionalAudio } from 'drei';

import AUDIO from './components/AUDIO';
import Bio from './components/Bio';
import Home from './components/Home';
import Nav from './components/Nav';

const StyledApp = styled.div`
  background: #5b33ff;
  margin: 0;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <Router>
        <Nav />
        <Switch>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
