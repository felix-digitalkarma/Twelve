
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContextProvider';

const Wrapper = styled.div`
padding: 20px;
margin-bottom: 50px;
height: 100vh;
background: ${({ theme }) => theme.color.surface}; 
`;

const ThemedHeader1 = styled.h1`
color:  ${({ theme }) => theme.color.on.surface};
`;

const ThemedHeader4 = styled.h4`
color:  ${({ theme }) => theme.color.on.surface};
`;

const ThemedCopy = styled.div`
color:  ${({ theme }) => theme.color.on.surface};
`;

const ThemedList = styled.ul`
  list-style-type: none;
  color:  ${({ theme }) => theme.color.on.surface};
`;

const Home = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <Wrapper theme={theme}>
      <ThemedHeader1 theme={theme}>Home</ThemedHeader1>
      <ThemedCopy theme={theme}>meaningful personal recovery awareness</ThemedCopy>
      <hr />
      <ThemedHeader4 theme={theme}>Prelude</ThemedHeader4>
      <ThemedCopy theme={theme}>The pandemic has disrupted our way of living, how we connect to others through being present emotionally and physically.It has created isolation, despair and fear. For those that were on the path to recovery, suddenly being diverted off, needing to find their way. The pandemic has also revealed the need to still connect, even more now than ever. The engine being in-person meetings which provided a safe space to hear other stories that mirrored my own. To know that I wasn’t alone in my journey. For those that suffer in silence, please know that you are not alone.</ThemedCopy>
      <hr />
      <ThemedHeader4 theme={theme}>My Story</ThemedHeader4>
      <ThemedCopy theme={theme}>Hello, My name is Felix and I’m codependent, a child of an alcoholic, a compulsive debtor, and I'm in recovery. I grew up with a pretty dysfunctional childhood, with an abusive alcoholic father, a loving mother who worked multiple jobs. I isolated heavily from the outside world, developed unhealthy standards for intimacy and relationships. It wasn't until I consistently went to meetings, that I discovered my issues with boundaries and trust. I placed a lot of emotional attachment to my work, for both my successes and failures. I've tried to control outcomes and situations based on fear, which ultimately is out of my control. I’ve also spent time facilitating meetings and becoming more engaged in my recovery. This is my social impact & community service project, born out of experience and the pursuit of love, awareness and recovery.</ThemedCopy>
      <hr />
      <ThemedHeader4 theme={theme}>My Process</ThemedHeader4>
      <ThemedCopy theme={theme}>The design approach allows for:</ThemedCopy>
      <ThemedList theme={theme}>
        <li> <ThemedCopy theme={theme}>Discovery &amp; Research</ThemedCopy></li>
        <li> <ThemedCopy theme={theme}>Sketching &amp; Ideation</ThemedCopy></li>
        <li> <ThemedCopy theme={theme}>Narrowing Scope &amp; Defining Structure</ThemedCopy></li>
        <li> <ThemedCopy theme={theme}>Prototyping &amp; Testing</ThemedCopy></li>
      </ThemedList>
      <ThemedCopy theme={theme}>Through this process, we discover the success and failures around our user along with the pain they've experienced. From hearing their story, we can then start creating a solution that's tailored to their needs.</ThemedCopy>
    </Wrapper>
  )
}

export default Home;