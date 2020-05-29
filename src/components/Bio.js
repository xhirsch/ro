import React from 'react';
import styled from 'styled-components';
import randomColor from 'randomcolor';
import { toRGB } from '../helpers/rgbExtract'

const color = randomColor({
  count: 2,
  format: "rgb"
});

const rColor = randomColor({ format: "rgb" });
const bgColor = toRGB(rColor)

const tColorR = 255 - `${bgColor[0]}`;
const tColorG = 255 - `${bgColor[1]}`;
const tColorB = 255 - `${bgColor[2]}`;

const tColor = `rgb(${tColorR}, ${tColorG}, ${tColorB})`

const tColor1 = randomColor({
  format: "rgb"
});
const tColor2 = randomColor();

const Text = styled.div`
  background: ${rColor};
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  font-size: 2em;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    font-size: 2rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const ContentENG = styled.div`
  height: calc(100% - 8rem);
  // background: ${bgColor};
  color: ${tColor};
  padding: 4rem;

  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

const ContentDE = styled.div`
  height: calc(100% - 8rem);
  // background: ${bgColor};
  padding: 4rem;
  color: ${tColor};

  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
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