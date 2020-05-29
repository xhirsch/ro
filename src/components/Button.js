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
  background: ${bg1};
  font-family: Amplitude-Bold;
  text-transform: uppercase;
  font-size: 2rem;
  color: #daff33;
  transition: all 0.5s ease-in-out 0s;
  
  &:hover {
    background: #ff5833;
  }
`;

const Button = (props) => {

  function changeBackgroundEnter(e) {
    e.target.style.background = `${bg2}`;
  }
  function changeBackgroundLeave(e) {
    e.target.style.background = `${bg3}`;
  }


  return <StyledButton onMouseOver={changeBackgroundEnter} onMouseLeave={changeBackgroundLeave} as={Link} to={props.link}
    style={{
      background: `${props.bgColor}`,
      color: `${props.tColor}`,
    }}
  >{props.name}</StyledButton>;
}

export default Button;