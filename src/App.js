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
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas:
    't t t t t t t t t t n n'
    't t t t t t t t t t n n'
    't t t t t t t t t t s s';
`;

const Soundcloud = styled.button`
  grid-area: s;
  width: 100%;
  background: #8d33ff;
  border: none;
  font-family: Amplitude-Bold;
  text-transform: uppercase;
  font-size: 2rem;
  color: #daff33;
  transition: all 0.5s ease-in-out 0s;

  &:hover {
    background: #ff5833;
  }
`;

function App() {
  return (
    <StyledApp>
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
