import React from "react";
import styled from 'styled-components';
import { toRGB } from '../helpers/rgbExtract'
import randomColor from 'randomcolor';

import Button from './Button'

const bg1 = randomColor();
const bg2 = randomColor();
const bg3 = randomColor();

const tColor1 = randomColor();
const tColor2 = randomColor();
const tColor3 = randomColor();

const Wrapper = styled.div`
  width: 50%;
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
`;

const Nav = (props) => {
  const hue = toRGB(props.color)

  const hueBG = (hue[0] + 180) % 360;
  const sBG = "100%";
  const lBG = "50%";
  const bgColor = `hsl(${hueBG}, ${sBG}, ${lBG})`;

  const hueT = `${hue[0]}`;
  const sT = "50%";
  const lT = "50%";

  const textColor = `hsl(${hueT}, ${sT}, ${lT})`

  return (
    <Wrapper>
      <Button name={"Biography"} link={"/"} bgColor={bgColor} tColor={textColor} />
      <Button name={"Images"} link={"/images"} bgColor={bgColor} tColor={textColor} />
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