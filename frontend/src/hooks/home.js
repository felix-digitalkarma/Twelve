import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  padding: 20px;
  margin: 0px;
`;
const Home = () => {
  return (
    <CardWrapper>
      <h1>Home</h1>
      <p>meaningful personal recovery awareness</p>
      <hr />
      <h4>Prelude</h4>
      <p>
        The pandemic has disrupted our way of living, how we connect to others
        through being present emotionally and physically.It has created
        isolation, despair and fear. For those that were on the path to
        recovery, suddenly being diverted off, needing to find their way. The
        pandemic has also revealed the need to still connect, even more now than
        ever. The engine being in-person meetings which provided a safe space to
        hear other stories that mirrored my own. To know that I wasn’t alone in
        my journey. For those that suffer in silence, please know that you are
        not alone.
      </p>
    </CardWrapper>
  );
};

export default Home;
