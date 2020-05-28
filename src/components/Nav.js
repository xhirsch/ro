import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-area: n;
  width: 100%;
  height: 100%;
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgLink = styled.button`
  height: 100%;
  width: 100%;
  background: #0ead3c;
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

const BioLink = styled.button`
  height: 100%;
  width: 100%;
  background: #ff6400;
  border: none;
  font-family: Amplitude-Bold;
  text-transform: uppercase;
  font-size: 2rem;
  color: white;
  transition: all 0.5s ease-in-out 0s;

  &:hover {
    background: #ff5833;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <ImgLink>IMAGES</ImgLink>
      <BioLink>BIOGRAPHIE</BioLink>
    </Wrapper>
  );
};

export default Nav;
