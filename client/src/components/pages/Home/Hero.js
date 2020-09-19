import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="cover-heading">Find your recovery.</h1>
          <p className="lead">Anonymity as a designing principle, recovery as a designing purpose, connection through modern technology.</p>
          <p className="lead">
            <a href="https://forms.gle/VHt4Hrb9QGiBTVcWA" className="btn btn-lg btn-success" target="_blank">Take Survey</a>
          </p>
        </Col>
      </Row>

    </Container>
  )
}

export default Hero
