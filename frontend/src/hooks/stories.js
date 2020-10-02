import React, { Fragment, useEffect } from 'react'
import { useStories } from '../contexts/stories';

export const Stories = () => {
  const [state, actions] = useStories();
  const { data } = state;

  useEffect(() => {
    if (!state.data) actions.fetch()
  }, [actions, state.data]);

  return (
    <Fragment>
      <h1>Stories</h1>
      <ul>
        {data && data.map(story => (
          <li key={story._id}>
            <p>{story.title}</p>
            <p>{story.body}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default Stories