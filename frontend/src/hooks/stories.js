import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;

export const Stories = () => {
  return (
    <Wrapper>
      <h1>User Stories</h1>
      <p>
        &ldquo;A user story is short, specific and goal-oriented. It is a
        one-sentence statement that tends to have the following structure: “As a
        X, I want Y so that Z occurs”. Based on persona, describe the path the
        user takes from initial qualifying event to finding recovery, attending
        and organizing meetings.&rdquo; -{" "}
        <a href="https://www.interaction-design.org/literature/article/user-stories-as-a-ux-designer-i-want-to-embrace-agile-so-that-i-can-make-my-projects-user-centered">
          Interaction Design.org
        </a>
        .
      </p>
      <ol>
        <li>
          As an newcomer, I want to find recovery tools, whether that be in the
          form of meetings, literature, videos or podcasts, methods or
          techniques, so that I can be better educated to deal with my
          addictions, to start recovery and begin the healing process.
        </li>
        <li>
          As an attendee, I want to be notified of upcoming workshops or
          conferences that I might be interested in attending so that I can
          discover new paths or areas that I want to heal within myself.
        </li>
        <li>
          As a trusted servant, I want to find speakers for my local meeting
          easily
        </li>
        <li>
          As a trusted servant, I want to find an easier way to share documents,
          readings, etc. literature during meetings (volunteers for reading),
        </li>
        <li>
          As a trusted servant, I want to find an easy way to manage currency
          with minimal risk, keep track of donations and be able to share that
          information.
        </li>
        <li>
          As a trusted servant, I want a way to pass information from regional
          levels to local meetings.
        </li>
      </ol>
    </Wrapper>
  );
};

export default Stories;
