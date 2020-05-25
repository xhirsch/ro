import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  background: lightgreen;
  margin: 0;
`;

const Bio = () => {
  return (
    <Title>
      Random Orchestra is the vision of media artist Xaver Hirsch and music
      producer Oliver Gehrmann, that unites atmospherical electronic music with
      sophisticated visualization. They blend organic textures with melancholic
      melodies, dreamy pads with distorted percussions and dark pop layers to
      create a cinematic utopia, both visual and auditory. Influenced by artists
      like Shlohmo, Bonobo, Moderat and Mount Kimbie they search for their own
      place within the genre-bending twilight of abstract hip-hop, ambient,
      electronic music and organic visual weirdness.
    </Title>
  );
};

export default Bio;
