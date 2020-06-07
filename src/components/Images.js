import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/images/ro_0001.jpg'
import img2 from '../assets/images/ro_0002.jpg'


const Wrapper = styled.div`
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: center;
`;

const Img = styled.img`
  width: 30%; 
  
  @media screen and (max-width: 500px) {
    width: 49%;
  }
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
