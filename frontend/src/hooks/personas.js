import React from "react";
import styled from "styled-components";
import * as daniel from "../assets/daniel.jpg";
import * as george from "../assets/george.jpg";
import * as tom from "../assets/tom.jpg";
import Avatar from "../components/Avatar";

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 150px;
`;

const Persona = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid #222;
  background-color: #222;
  color: #fff;
  img {
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

const PersonaTextBlock = styled.div`
  padding: 20px;
`;

const Personas = () => {
  return (
    <Wrapper>
      <Persona>
        <Avatar image={daniel} width={"400px"} height={"400px"} />
        <PersonaTextBlock>
          Daniel C. “The Newcomer” <br />
          Age: 35 - 46 <br /> Employment: Unemployed <br />
          High Tech Proficiency <br /> <br />
          Background <br />
          New to the program, Daniel has attended less than 10 meetings. His
          qualifying event was a break up with his girlfriend of 5 years. He’s
          had a string of bad relationships, each a heartbreaking loss. Before
          the breakup, the term “codependency” was brought up, a foreign concept
          yet vaguely familiar. Daniel knew something was wrong but couldn’t
          explain why. His search for “codependency” led him to finding
          Coda.org. He found a meeting that was local to him, only a few miles
          away. He went, hearing familiar stories of other failed relationships.
          He’s planning on attending next week’s meeting. <br /> <br />
          Motivations <br />
          Wanting a better quality of life in his relationships. Wanting to find
          help. <br />
          Core Needs <br /> Easily find meetings, tools or literature. Find
          relevancy to own experiences. <br />
          Pain Points <br /> Finding meetings and attending consistently.
        </PersonaTextBlock>
      </Persona>

      <Persona>
        <Avatar image={george} width={"400px"} height={"400px"} />
        <PersonaTextBlock>
          Georgina A . “The Attendee” <br />
          Age: 46-55 <br />
          Employment: Employed <br />
          Somewhat Tech Proficiency <br />
          <br />
          Background <br />
          Having had 6 months of attendance in Coda and DA, Georgina is on her
          path of recovery. She came to the program after she realized she was
          having issues at work, and in her relationships. She has a sponsor
          that is guiding her through her program, a lifeline when things are
          stressful and George has questions. She keeps a journal of her
          experiences and shares her entries in her weekly shares. She has
          worked multiple programs, mending multiple areas in her life,
          including her relationship with money and her personal relationships.
          She attends weekly meetings, and often attends workshops she hears
          about from friends in the program. <br />
          <br />
          Motivations <br />
          Exploring new programs or meetings, attending workshops or
          conventions. <br />
          Core Needs <br />
          Discovering new tools to aid in her recovery. Find relevancy to own
          experiences to speaker led events. Getting notified of new events /
          workshops she might be interested in. <br />
          Pain Points <br />
          Finding meetings and workshops within proximity.
        </PersonaTextBlock>
      </Persona>

      <Persona>
        <Avatar image={tom} width={"400px"} height={"400px"} />
        <PersonaTextBlock>
          Tom R . “The Trusted Servant” <br />
          Age: 65-77 <br />
          Employment: Retired <br />
          Limited Tech Proficiency <br />
          <br />
          Background <br />
          Having had years of sobriety, Tom has worked multiple programs and
          actively sponsors. He has served as a trusted servant in his local
          group and at the regional level. He’s active in all conventions,
          workshops and event planning meetings. He is somewhat savvy on
          technology and understands how to use his ipad to read emails. He’s
          responsible for finding meeting speakers for his local meetings.
          <br />
          <br />
          Motivations <br />
          Finding an easier way to manage meetings, update meeting details,
          finding speakers <br />
          Core Needs <br />
          Disseminate information throughout organization at a local and
          regional level. <br />
          Pain Points <br />
          Organize meeting notes, Find speakers for next few months.
        </PersonaTextBlock>
      </Persona>
    </Wrapper>
  );
};

export default Personas;
