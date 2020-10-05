import React from "react";
import styled from "styled-components";

import HeroCarousel from "../components/HeroCarousel";

const CardWrapper = styled.div`
  padding: 0px;
  margin: 0px;
`;

const StyledH4 = styled.h4`
  padding-left: 20px;
  padding-bottom: 0px;
`;

const StyledText = styled.p`
  padding-left: 20px;
`;

const Home = () => {
  return (
    <CardWrapper>
      <HeroCarousel showArrows={false} showStatus={false} />
      <StyledH4>Prelude</StyledH4>
      <StyledText>
        The pandemic has disrupted our way of living, how we connect to others
        through being present emotionally and physically.It has created
        isolation, despair and fear. For those that were on the path to
        recovery, suddenly being diverted off, needing to find their way. The
        pandemic has also revealed the need to still connect, even more now than
        ever. The engine being in-person meetings which provided a safe space to
        hear other stories that mirrored my own. To know that I wasn’t alone in
        my journey. For those that suffer in silence, please know that you are
        not alone.
      </StyledText>
    </CardWrapper>
  );
};

export default Home;
