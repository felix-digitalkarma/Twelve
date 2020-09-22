import React, { Fragment, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

import AddStoryForm from './AddStoryForm';

const StoriesComponent = (props) => {

  const { getStories, stories, } = props;

  useEffect(() => {
    getStories();
  }, [getStories]);

  return (
    <Container>
      <Row>
        <Col md={5}>
          <h1>Stories Component</h1>
          <p>There are currently {stories.length || 0} stories.</p>
          <AddStoryForm {...props} />


        </Col>
        <Col md={7}>
          {stories &&
            stories.map(story => (
              <Fragment key={story._id}>
                <h3>{story.title}</h3>
                <p>{story.body}</p>
                <p>Shared <Moment format="LLL">{story.shared}</Moment></p>

              </Fragment>
            ))}

        </Col>
      </Row>
    </Container>
  )
}

export default StoriesComponent
