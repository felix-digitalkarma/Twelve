import React, { Fragment, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import Moment from 'react-moment';

// import AddStoryForm from './AddStoryForm';
import StoryCard from './StoryCard';

const StoriesComponent = (props) => {

  const { getStories, stories } = props;

  useEffect(() => {
    getStories();
  }, [getStories]);

  return (
    <Container>
      <h3>User Stories</h3>
      <Row>
        {stories &&
          stories.map(story =>
            <Col md={6}>
              <StoryCard key={story.title} {...story} />
            </Col>
          )}
      </Row>
    </Container>
  )
}

export default StoriesComponent
