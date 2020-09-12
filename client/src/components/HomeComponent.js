import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import hero from '../assets/getty_papermen.jpg';
const HomeComponent = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className="p-3"> <h1>Welcome to Twelve.Community</h1>
            <span className="hero"><img src={hero} alt="Twelve Community" /></span>
            <h5>Mission:</h5>
            <p>To create a safe and secure platform for all to share personal stories of recovery, become involved with our communities through service, guiding others through sponsorship, and supporting our local and global communities through charitable donation.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Ways you can help?</h3>
            <ul>
              <li><a href="https://forms.gle/FpfZnYYEWncwRDHy9" alt="Twelve Community">Take the survey</a></li>
              <li><a href="https://docs.google.com/presentation/d/11yH55CqkhUpf8gpEN8-c5f7bDUa-Y6qzfAeY8AnPYpk/edit?usp=sharing">UX Process Presentation</a></li>
              <li><a href="https://paypal.me/felixmontanez?locale.x=en_US" alt="Paypal Donate">Donate by Paypal</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default HomeComponent
