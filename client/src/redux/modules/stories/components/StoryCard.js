import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Moment from 'react-moment';

const StoryCard = (story) => {
  const { user, title, body, shared } = story;
  const random = Math.random();
  const url = `https://picsum.photos/200/250?random=${random}`;

  return (
    <Container>
      <Row className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <Col className="p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">
            {user.firstName} {user.lastInitial}
          </strong>
          <h6 className="mb-0">{title}</h6>
          <div className="mb-1 text-muted"><Moment format="ll">{shared}</Moment></div>
          <p className="card-text mb-auto">{body.substring(0, 100)}...</p>
          <Link to={`/stories/${story.link}`}>Read More</Link>
        </Col>
        <div className="col-auto d-none d-lg-block">
          <img className="bd-placeholder-img bg-dark" width="200" height="250" src={url} />
        </div>
      </Row>
    </Container>

  )
}

export default StoryCard
