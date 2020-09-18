import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Hero from './Hero';
import TabbedPanel from './TabbedPanel';

const HomePage = () => {

  return (
    <Container >
      <Row>
        <Col>
          <Hero />
          <TabbedPanel />
        </Col>
      </Row>

    </Container>
  )
}

export default HomePage
