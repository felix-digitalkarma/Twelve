import React from "react";
import styled from "styled-components";

import HeroCarousel from "../components/HeroCarousel";

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
      <HeroCarousel showArrows={false} showStatus={false} />
      <StyledH4>Prelude</StyledH4>
      <StyledText>
        <p className="lead">
          The pandemic has disrupted our way of living, how we connect to others
          through being present emotionally and physically.
        </p>
        <p>
          It has created isolation, despair and fear. For those that were on the
          path to recovery, suddenly being diverted off, needing to find their
          way.{" "}
        </p>
        <p>
          {" "}
          The pandemic has also revealed the need to still connect, even more
          now than ever. The engine being in-person meetings which provided a
          safe space to hear other stories that mirrored my own. To know that I
          wasn’t alone in my journey.
        </p>
        <p>
          For those that suffer in silence, please know that you are not alone.
        </p>
      </StyledText>
      <StyledH4>My Story</StyledH4>
      <StyledText>
        <p className="lead">
          Hello, My name is Felix and I’m codependent, a child of an alcoholic,
          a compulsive debtor, and I'm in recovery.
        </p>
        <p>
          I grew up with a pretty dysfunctional childhood, with an abusive
          alcoholic father, a loving mother who worked multiple jobs. I isolated
          heavily from the outside world, developed unhealthy standards for
          intimacy and relationships.
        </p>
        <p>
          It wasn't until I consistently went to meetings, that I discovered my
          issues with boundaries and trust. I placed a lot of emotional
          attachment to my work, for both my successes and failures. I've tried
          to control outcomes and situations based on fear, which ultimately
          were out of my control.
        </p>
        <p>
          I’ve also spent time facilitating meetings and becoming more engaged
          in my recovery. This is my social impact &amp; community service
          project, born out of experience and the pursuit of love, awareness and
          recovery.
        </p>
      </StyledText>
      <StyledH4>My Process</StyledH4>
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
