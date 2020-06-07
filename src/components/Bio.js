import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  height: 95%;
  font-family: Amplitude-Regular;
  font-size: 2.5rem;

  @media screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2em;
  }
`;

const Content = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Bio = (props) => {
  return (
    <Wrapper>
      <Content>
        Random Orchestra is the vision of media artist Xaver Hirsch and music producer Oliver Gehrmann,
        that unites atmospherical electronic music with sophisticated visualization.
        They blend organic textures with melancholic melodies, dreamy pads with distorted percussions
        and dark pop layers to create a cinematic utopia, both visual and auditory.
 <br />
        <br />
        Influenced by artists like Shlohmo, Bonobo, Moderat and Mount Kimbie they search for their own place
        within the genre-bending twilight of abstract hip-hop, ambient, electronic music and organic visual weirdness.
      </Content>
    </Wrapper>
  );
};

export default Bio;