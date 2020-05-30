import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import randomColor from 'randomcolor';

import Bio from './components/Bio';
import Images from './components/Images';
import Nav from './components/Nav';

const rColor = randomColor({ format: "hsl" });

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: rows;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

function App() {
  const [color, setColor] = useState(rColor)
  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route exact path="/images" component={Images} />
          <Route exact path="/"><Bio color={color} /></Route>
        </Switch>
        <Nav color={color} />
      </Router>
    </StyledApp>
  );
}

export default App;
