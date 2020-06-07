import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/images/ro_0001.jpg'
import img2 from '../assets/images/ro_0002.jpg'


const Wrapper = styled.div`
  height: 95%;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
  flex-direction: rows;
  justify-content: center;
`;

const Img = styled.img`
  height: 100%;
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
