import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

import AddStory from './AddStory';
import StoryCard from './StoryCard';

const StoriesComponent = (props) => {

  const { getStories, stories, modal, showModal } = props;
  const { show } = modal;
  const { isAuthenticated } = props.auth;

  useEffect(() => {
    getStories();
  }, [getStories]);

  return (
    <Container>
      <Helmet>
        <title>User Stories</title>
        <meta name="description" content="Anonymity as a designing principle, recovery as a designing purpose, connection through modern technology." />
        <meta property="og:type" content="article" />
      </Helmet>
      <Container>
        <Row>
          <Col>
            <h3>User Stories</h3>
            <p>Spicy jalapeno consequat eiusmod prosciutto, buffalo pig biltong dolore cillum. Reprehenderit minim laborum, lorem chuck dolor in cillum turkey nisi rump eiusmod aliqua. Pig sirloin dolore culpa boudin pork loin tempor in incididunt excepteur laborum rump eu chuck. Lorem ground round turducken commodo, in cow andouille frankfurter beef ribs ut sed bacon aute esse. Boudin rump kielbasa, quis veniam dolore capicola biltong cupidatat enim meatball excepteur leberkas ut.</p>
            <h5>Share your story.</h5>
            <p>Id chislic ut, reprehenderit brisket cow ad qui pork chop in mollit aliquip andouille voluptate tempor. Rump culpa irure bresaola salami. Commodo chuck incididunt tri-tip, salami velit boudin esse lorem laborum. Ut leberkas landjaeger cow chicken pork belly, picanha cupim ex. Aliqua chislic salami in.</p>

            {isAuthenticated &&
              <Fragment>
                <div className="p-2">
                  <button className="btn btn-primary" onClick={showModal}>Share your story</button>
                </div>
              </Fragment>
            }

            {isAuthenticated && show && <AddStory {...props} />}
          </Col>
        </Row>
      </Container>
      <Row className="p-2">
        <Container>
          <Row>
            {stories &&
              stories.map(story =>
                <Col key={story._id} md={6}>
                  <StoryCard link={story._id} {...story} />
                </Col>
              )}
          </Row>
        </Container>
      </Row>
    </Container>
  )
}

export default StoriesComponent
