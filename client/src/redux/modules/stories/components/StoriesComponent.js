import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

import AddStoryForm from './AddStoryForm';
import StoryCard from './StoryCard';

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={show === false ? 'modal d-none' : 'modal d-block'}>
      <div className='modal-main'>
        <div className='closeBtn' onClick={handleClose}>
          <i className='fa fa-times-circle'></i>
        </div>
        {children}
      </div>
      <div className='modal-bkgd bg-dark'></div>
    </div>
  );
};

const StoriesComponent = (props) => {

  const { getStories, stories, modal, showModal, hideModal, auth } = props;
  const { show } = modal;
  const { isAuthenticated } = auth;

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

            {isAuthenticated && show && <AddStoryForm {...props} />}
          </Col>
        </Row>
      </Container>
      <Row>

        {stories &&
          stories.map(story =>
            <Col key={story._id} md={6}>
              <StoryCard  {...story} />
            </Col>
          )}

      </Row>
    </Container>
  )
}

export default StoriesComponent
