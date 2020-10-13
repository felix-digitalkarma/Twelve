import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Card from "../components/Card";

const danielURL = "https://twelve-app.s3-us-west-1.amazonaws.com/daniel.jpg";
const georgeURL = "https://twelve-app.s3-us-west-1.amazonaws.com/george.jpg";
const tomURL = "https://twelve-app.s3-us-west-1.amazonaws.com/tom.jpg";

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 150px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1200px;
  margin: 0px auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 20px;
    margin-right: auto;
  }
`;

const CardWrapper = styled.div`
  margin: 5px;
`;

const Personas = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Twelve : Personas</title>
        <link rel="canonical" href="http://www.twelve.community/personas" />
        <meta
          name="keywords"
          content="Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology"
        />
      </Helmet>
      <Container>
        <CardWrapper>
          <Card
            name={"Daniel"}
            lastInitial={"C"}
            title={"The Newcomer"}
            image={danielURL}
            snippet={
              "New to the program, Daniel has attended less than 10 meetings. His qualifying event was a break up with his girlfriend of 5 years. He’s had a string of bad relationships, each a heartbreaking loss. His search for “codependency” led him to finding Coda.org. He found a meeting that was local to him, only a few miles away. He went, hearing familiar stories of other failed relationships. He’s planning on attending next week’s meeting."
            }
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            name={"Georgina"}
            lastInitial={"A"}
            title={"The Attendee"}
            image={georgeURL}
            snippet={
              "Having had 6 months of attendance in Coda and DA, Georgina is on her path of recovery.She has worked multiple programs, mending multiple areas in her life, including her relationship with money and her personal relationships. She attends weekly meetings, and often attends workshops she hears about from friends in the program. She keeps a journal of her experiences and shares her entries in her weekly shares."
            }
          />
        </CardWrapper>

        <CardWrapper>
          <Card
            name={"Tom"}
            lastInitial={"Q"}
            title={"The Trusted Servant"}
            image={tomURL}
            snippet={
              "Having had years of sobriety, Tom has worked multiple programs and actively sponsors. He has served as a trusted servant in his local group and at the regional level. He’s active in all conventions, workshops and event planning meetings. He is somewhat savvy on technology and understands how to use his ipad to read emails. He’s responsible for finding meeting speakers for his local meetings."
            }
          />
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Personas;
