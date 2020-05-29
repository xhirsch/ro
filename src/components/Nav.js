import React from "react";
import styled from 'styled-components';
import randomColor from 'randomcolor';

import Button from './Button'

const bg1 = randomColor();
const bg2 = randomColor();
const bg3 = randomColor();

const tColor1 = randomColor();
const tColor2 = randomColor();
const tColor3 = randomColor();

const Wrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 25%;
  }
`;

const Soundcloud = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${bg3};
  border: none;
  cursor:pointer;
  font-family: Amplitude-Bold;
  text-transform: uppercase;
  font-size: 2rem;
  color: ${tColor3};
  transition: all 0.5s ease-in-out 0s;

  &:hover {
    background: #ff5833;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <Button name={"Biography"} link={"/"} bgColor={bg1} tColor={tColor1} />
      <Button name={"Images"} link={"/images"} bgColor={bg2} tColor={tColor2} />
      <Soundcloud onClick={() => {
        window.open(
          'https://soundcloud.com/random-orchestra',
          '_blank'
        );
      }}>Soundcloud</Soundcloud>
    </Wrapper>
  );
};

export default Nav;