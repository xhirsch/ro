import React from 'react';
import styled from 'styled-components';
import { toRGB } from '../helpers/rgbExtract'


const Text = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  font-size: 3em;

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
  padding: 4rem;

  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

const Bio = (props) => {
  const hue = toRGB(props.color)
  const hueBG = `${hue[0]}`;
  const sBG = "50%";
  const lBG = "50%";

  const hueT = (hue[0] + 180) % 360;
  const sT = "100%";
  const lT = "50%";

  const textColor = `hsl(${hueT}, ${sT}, ${lT})`

  return (
    <Text
      style={{
        background: `hsl(${hueBG}, ${sBG}, ${lBG})`
      }}
    >
      <ContentENG
        style={{
          color: `${textColor}`
        }}
      >
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
    </Text>
  );
};

export default Bio;