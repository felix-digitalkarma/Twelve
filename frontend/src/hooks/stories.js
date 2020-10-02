import React, { Fragment, useEffect } from 'react'
import { useStories } from '../contexts/stories';

import Card from '../components/Card';

export const Stories = () => {
  const [state, actions] = useStories();
  const { data } = state;

  useEffect(() => {
    if (!state.data) actions.fetch()
  }, [actions, state.data]);

  return (
    <Fragment>
      {data && data.map(story => <Card key={story._id} {...story} />)}
    </Fragment>
  )
}

export default Stories