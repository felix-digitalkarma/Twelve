import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TabbedPanel from './TabbedPanel';
const HomeComponent = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row className="minh-300">
          <Col className="p-3">
            <h1>Find Your Recovery</h1>
            <h5>Anonymity as a designing principle,</h5>
            <h5>Recovery as a designing purpose,</h5>
            <h5>Connection through technology.</h5>
            <button>Take Survey</button>
            <button>Donate</button>
          </Col>
          <Col className="p-3">
            <h1>Graphic</h1>
            <p>Vector Graphic, Imagery or Slideshow that depicts the overall goal of the project in what it does.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <TabbedPanel />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default HomeComponent
