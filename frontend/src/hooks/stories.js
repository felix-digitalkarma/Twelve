import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { StoryContext } from '../contexts/StoryContextProvider';

const Wrapper = styled.div`
padding: 20px;
`;

export const Stories = () => {

  const { stories, fetchStories } = useContext(StoryContext);

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  return (
    <Wrapper>
      <h2>Stories</h2>
      <ul>
        {stories.map(story => (
          <li key={story._id}>
            <h3>{story.title}</h3>
            <p>{story.body}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default Stories;