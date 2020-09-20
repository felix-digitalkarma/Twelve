import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import group from '../../../assets/crp_unsplash.jpg';
import conference from '../../../assets/daanstevens_group.jpg';


const Hero = () => {
  return (
    <Container className="text-center" fluid>
      <Row>
        <Col>
          <div id="myCarousel" className="carousel slide bg-none" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="bd-placeholder-img" width="100%" height="100%" src={group} />
                <div className="container">
                  <div className="carousel-caption text-left">
                    <h1>Community Mission</h1>
                    <p>To create a safe and secure platform for all to share personal stories of recovery, become involved with our communities through service, guiding others through sponsorship, and supporting our local and global communities through charitable donation.</p>
                    <p><a className="btn btn-lg btn-primary" href="https://forms.gle/VHt4Hrb9QGiBTVcWA" role="button">Take Survey</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="bd-placeholder-img" width="100%" height="100%" src={conference} />
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Find your recovery.</h1>
                    <p>Anonymity as a designing principle, recovery as a designing purpose, connection through modern technology.</p>
                    <p><a className="btn btn-lg btn-primary" href="https://forms.gle/VHt4Hrb9QGiBTVcWA" target="_blank" role="button">Take Survey</a></p>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </Col>
      </Row>

    </Container>
  )
}

export default Hero
