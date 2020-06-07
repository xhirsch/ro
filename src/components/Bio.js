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
        Random Orchestra ist die Vision von Media Artist Xaver Hirsch und
        Musikproduzent Oliver Gehrmann, die atmosphärische elektronische Musik
        und komplexe Visualisierungen zusammenführt. Organische Texturen,
        melancholische Melodien, verträumte Sphären und Pop-Anleihen, vermischen
        sich visuell und auditiv zu einem cineastischen Erlebnis. <br />
        <br />
        Beeinflusst von Künstlern wie Shlohmo, Bonobo, Moderat und Mount Kimbie
        suchen sie nach ihrer eigenen Heimat im Zwielicht von abstraktem
        Hip-Hop, Ambient, elektronischer Musik und visueller Freiheit.
      </Content>
    </Wrapper>
  );
};

export default Bio;