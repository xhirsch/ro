import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import randomColor from 'randomcolor';

const bg1 = randomColor();
const bg2 = randomColor();
const bg3 = randomColor();

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor:pointer;
  font-family: Amplitude-Bold;
  font-size: 2rem;
  transition: all 0.5s ease-in-out 0s;
`;

const Button = (props) => {

  console.log(props.bgColor)
  function changeBackgroundEnter(e) {
    e.target.style.background = "black";
  }
  function changeBackgroundLeave(e) {
    e.target.style.background = "white";
  }


  return <StyledButton onMouseOver={changeBackgroundEnter} onMouseLeave={changeBackgroundLeave} as={Link} to={props.link}
    style={{
      background: `${props.bgColor}`,
      color: `${props.tColor}`,
    }}
  >{props.name}</StyledButton>;
}

export default Button;