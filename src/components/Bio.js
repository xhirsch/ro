import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  grid-area: t;
  background: violet;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  font-size: 2em;
`;

const ContentENG = styled.div`
  height: 100%;
  font-family: Amplitude-Medium;
  background: PALEGREEN;
  color: #ff5733;
  padding: 4rem;
`;

const ContentDE = styled.div`
  height: 100%;
  background: #dbff33;
  color: #8333ff;
  padding: 4rem;
`;

const Bio = () => {
  return (
    <Text>
      <ContentENG>
        Random Orchestra ist die Vision von Media Artist Xaver Hirsch und
        Musikproduzent Oliver Gehrmann, die atmosphärische elektronische Musik
        und komplexe Visualisierungen zusammenführt. Organische Texturen,
        melancholische Melodien, verträumte Sphären und Pop-Anleihen, vermischen
        sich visuell und auditiv zu einem cineastischen Erlebnis. <br />
        <br />
        Beeinflusst von Künstlern wie Shlohmo, Bonobo, Moderat und Mount Kimbie
        suchen sie nach ihrer eigenen Heimat im Zwielicht von abstraktem
        Hip-Hop, Ambient, elektronischer Musik und visueller Freiheit.
      </ContentENG>
      <ContentDE>
        Random Orchestra is the vision of media artist Xaver Hirsch and music
        producer Oliver Gehrmann, that unites atmospherical electronic music
        with sophisticated visualization. They blend organic textures with
        melancholic melodies, dreamy pads with distorted percussions and dark
        pop layers to create a cinematic utopia, both visual and auditory.
        <br />
        <br />
        Influenced by artists like Shlohmo, Bonobo, Moderat and Mount Kimbie
        they search for their own place within the genre-bending twilight of
        abstract hip-hop, ambient, electronic music and organic visual
        weirdness.
      </ContentDE>
    </Text>
  );
};

export default Bio;
