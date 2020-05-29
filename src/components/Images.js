import React from 'react';
import styled from 'styled-components';
import randomColor from 'randomcolor';

import img1 from '../assets/images/ro_0001.jpg'
import img2 from '../assets/images/ro_0002.jpg'

const bg = randomColor();

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${bg};
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
width: 35%;
padding: 4rem;
`;


const Images = () => {
  return <Wrapper>
    <ContentWrapper>
      <Img src={img1} />
      <Img src={img2} />
    </ContentWrapper>
  </Wrapper>;
};

export default Images;
