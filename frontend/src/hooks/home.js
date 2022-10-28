import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  padding: 0px;
  margin-bottom: 100px;
`;

const StyledH4 = styled.h4`
  padding-left: 20px;
  padding-bottom: 0px;
`;

const StyledText = styled.div`
  padding-left: 20px;
`;

const Home = () => {
  return (
    <CardWrapper>
      <StyledH4>Introductions</StyledH4>
      <StyledText>
        <p className="lead">
          The pandemic has disrupted our way of living, how we connect to others
          through being present emotionally and physically.
        </p>
        <p>
          It has created isolation, despair and fear. For those that were on the
          path to recovery, suddenly being diverted off, needing to find their
          way.
        </p>
        <p>
          The pandemic has also revealed the need to still connect, even more
          now than ever. The engine being in-person meetings which provided a
          safe space to hear other stories that mirrored my own. To know that I
          wasn’t alone in my journey.
        </p>
        <p>
          For those that suffer in silence, please know that you are not alone.
        </p>
      </StyledText>
      <StyledH4>My Mission</StyledH4>
      <StyledText>
        <p>
          To create a safe and secure platform for all to share personal stories
          of recovery, become involved with our communities through service,
          guiding others through sponsorship, and supporting our local and
          global communities through charitable donation.
        </p>
      </StyledText>
      <StyledText>
        <p className="lead">The design approach allows for: </p>

        <ul>
          <li>Discovery &amp; Research,</li>
          <li>Sketching &amp; Ideation,</li>
          <li>Narrowing Scope &amp; Defining Structure</li>
          <li>Prototyping &amp; Testing</li>
        </ul>
        <p>
          Through this process, we discover the success and failures around our
          user along with the pain they've experienced.
        </p>
        <p>
          From hearing their story, we can then start solving for their true
          needs.
        </p>
      </StyledText>
    </CardWrapper>
  );
};

export default Home;
