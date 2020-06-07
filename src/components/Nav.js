import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  width: 100%;
  height: 5%;
  position: fixed;
  bottom:0;
  left: 0;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
  flex-direction: rows;
  font-size: 1.4rem;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const SoundCloudButton = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-family: Amplitude-Regular;
  transition: all 0.5s ease-in-out 0s;
&:hover {
  background: white;
  color: black;
}
&:focus {
  background: white;
  color: black;
}
`;

const BioButton = styled(SoundCloudButton)``;
const ImgButton = styled(SoundCloudButton)``;

const Nav = (props) => {
  return (
    <Wrapper>
      <BioButton as={Link} to={"/"}>Biography</BioButton>
      <ImgButton as={Link} to={"/images"}>Images</ImgButton>
      <SoundCloudButton
        onClick={() => {
          window.open(
            'https://soundcloud.com/random-orchestra',
            '_blank'
          );
        }}>Soundcloud</SoundCloudButton>
    </Wrapper>
  );
};

export default Nav;