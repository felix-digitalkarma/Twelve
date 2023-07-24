import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { useStories } from "../contexts/stories";
import Card from "../components/Card";
import { Link, useNavigate } from "@reach/router";

const danielURL = "https://twelve-app.s3-us-west-1.amazonaws.com/daniel.jpg";

const Wrapper = styled.div`
  padding: 40px;
`;

const Container = styled.div`
  display: flex;
  border: 1px solid red;
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

// const CardWrapper = styled.div`
//   margin: 5px;
//   display: inline-block;
//   flex-direction: row;
//   min-width: 100%;
// `;

export const Story = (props) => {
  console.log(props);
  return (
    <Card
      title={props.title}
      user={props.user}
      image={danielURL}
      snippet={props.body}
    />
  );
};

export const Stories = (props) => {
  const [state, actions] = useStories();
  const navigate = useNavigate();
  if (props.path === "stories") {
    // console.log(state.data);
    if (state.data === null) {
      actions.fetch();
    }
  }

  const stories = state.data || [];
  console.log("stories", stories);
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
      </p>
      <Link to="/addstory">Add Story</Link>
      <Container>
        <ul>
          {stories !== null &&
            stories.map((story) => (
              <li key={story._id}>
                <button
                  onClick={() => {
                    actions.removeStory(story);
                    navigate("/");
                  }}
                >
                  Click To Remove
                </button>
                <Story
                  user={story.user}
                  title={story.title}
                  body={story.body}
                />
              </li>
            ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default Stories;
