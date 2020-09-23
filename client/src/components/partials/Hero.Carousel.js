import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import group from '../../assets/images/crp_unsplash.jpg';
import conference from '../../assets/images/daanstevens_group.jpg';


const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="bd-placeholder-img" width="100%" height="100%" src={group} />
        <Carousel.Caption>
          <h1>Community Mission</h1>
          <p>To create a safe and secure platform for all to share personal stories of recovery, become involved with our communities through service, guiding others through sponsorship, and supporting our local and global communities through charitable donation.</p>
          <p><a className="btn btn-lg btn-primary" href="https://forms.gle/VHt4Hrb9QGiBTVcWA" role="button">Take Survey</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="bd-placeholder-img" width="100%" height="100%" src={conference} />
        <Carousel.Caption>
          <h1>Find your recovery.</h1>
          <p>Anonymity as a designing principle, recovery as a designing purpose, connection through modern technology.</p>
          <p>
            <Link to="/stories" className="btn btn-lg btn-success">Stories</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HeroCarousel
