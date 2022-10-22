import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { useStories } from "../contexts/stories";
import Card from "../components/Card";

const danielURL = "https://twelve-app.s3-us-west-1.amazonaws.com/daniel.jpg";

const Wrapper = styled.div`
  padding: 40px;
`;

const Container = styled.div`
  display: flex;
  border: 1px solid red;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1600px;
  margin: 0px auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 20px;
    margin-right: auto;
  }
`;

const CardWrapper = styled.div`
  margin: 5px;
  display: inline-block;
  flex-direction: row;
  min-width: 100%;
`;

export const Story = (props) => {
  console.log("story props", props);

  return (
    <CardWrapper>
      <Card title={props.title} image={danielURL} snippet={props.body} />
    </CardWrapper>
  );
};

export const Stories = (props) => {
  const [state, actions] = useStories();
  if (props.path === "stories") {
    if (state.data === null) {
      actions.fetch();
    }
  }

  const stories = state.data || [];

  return (
    <Wrapper>
      <Helmet>
        <title>Twelve : Stories </title>
        <link rel="canonical" href="http://www.twelve.community/stories" />
        <meta
          name="keywords"
          content="Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology"
        />
      </Helmet>
      <h1 className="cover-heading">User Stories</h1>

      <p className="lead">
        A user story is short, specific and goal-oriented. It is a one-sentence
        statement that tends to have the following structure: “As a X, I want Y
        so that Z occurs”. Based on persona, describe the path the user takes
        from initial qualifying event to finding recovery, attending and
        organizing meetings. -{" "}
        <a href="https://www.interaction-design.org/literature/article/user-stories-as-a-ux-designer-i-want-to-embrace-agile-so-that-i-can-make-my-projects-user-centered">
          Interaction Design.org
        </a>
        .
      </p>
      <Container>
        <ul>
          {stories !== null &&
            stories.map((story) => (
              <li>
                <Story title={story.title} body={story.body} />
              </li>
            ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default Stories;
