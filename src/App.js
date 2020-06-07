import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Bio from './components/Bio';
import Images from './components/Images';
import Nav from './components/Nav';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route exact path="/images" component={Images} />
          <Route exact path="/"><Bio /></Route>
        </Switch>
        <Nav />
      </Router>
    </StyledApp>
  );
}

export default App;
