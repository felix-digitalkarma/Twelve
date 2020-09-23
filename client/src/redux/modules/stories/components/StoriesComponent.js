import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

// import AddStoryForm from './AddStoryForm';
import StoryCard from './StoryCard';

const StoriesComponent = (props) => {
  const { getStories, stories } = props;

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
        <h3>User Stories</h3>
        <p>Spicy jalapeno consequat eiusmod prosciutto, buffalo pig biltong dolore cillum. Reprehenderit minim laborum, lorem chuck dolor in cillum turkey nisi rump eiusmod aliqua. Pig sirloin dolore culpa boudin pork loin tempor in incididunt excepteur laborum rump eu chuck. Lorem ground round turducken commodo, in cow andouille frankfurter beef ribs ut sed bacon aute esse. Boudin rump kielbasa, quis veniam dolore capicola biltong cupidatat enim meatball excepteur leberkas ut.</p>
        <h5>Searching...</h5>
        <p>Id chislic ut, reprehenderit brisket cow ad qui pork chop in mollit aliquip andouille voluptate tempor. Rump culpa irure bresaola salami. Commodo chuck incididunt tri-tip, salami velit boudin esse lorem laborum. Ut leberkas landjaeger cow chicken pork belly, picanha cupim ex. Aliqua chislic salami in.</p>
      </Container>
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
