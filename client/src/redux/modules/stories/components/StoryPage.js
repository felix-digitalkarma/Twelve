import React, { useEffect } from 'react';

const StoryPage = (props) => {
  const { getStoryById, story, match } = props;
  useEffect(() => {
    getStoryById(match.params.id);
  }, [getStoryById, match.params.id]);

  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.body}</p>
    </div>
  )
}

export default StoryPage;
