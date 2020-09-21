import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import HeroCarousel from '../../partials/Hero.Carousel';

import ux_logo from '../../../assets/images/vector_ux.jpg';
import me from '../../../assets/images/me.jpg';
import train_station from '../../../assets/images/PittsTrain.jpg';

const HomePage = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <HeroCarousel />
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="marketing">
            <Row className="text-center">
              <Col lg={4}>
                <i className="fa fa-user-shield fa-5x"></i>
                <h2>Anonymity</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
              </Col>
              <Col lg={4}>
                <i className="fas fa-hand-holding-heart fa-5x"></i>
                <h2>Recovery</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
              </Col>
              <Col lg={4}>
                <i className="fas fa-users fa-5x"></i>
                <h2>Connection</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper..</p>
              </Col>
            </Row>
          </Container>
          <hr className="featurette-divider" />
          <Container>
            <Row className="featurette">
              <Col md={7} className="order-md-1">
                <h2 className="featurette-heading">Prelude</h2>
                <p className="lead">The pandemic has disrupted our way of living, how we connect to others through being present emotionally and physically. It has created isolation, despair and fear. For those that were on the path to recovery, suddenly being diverted off, needing to find their way. </p><p className="lead"> The pandemic has also revealed the need to still connect, even more now than ever. The engine being in-person meetings which provided a safe space to hear other stories that mirrored my own. To know that I wasn’t alone in my journey.</p><p className="lead">For those that suffer in silence, please know that you are not alone.</p>
              </Col>
              <Col md={5} className="order-md-2">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={train_station} />
              </Col>
            </Row>
            <hr className="featurette-divider" />
            <Row className="featurette">
              <Col md={7} className="order-md-2">
                <h2 className="featurette-heading">My Story</h2>
                <p className="lead">Hello, My name is Felix and I’m codependent, a child of an alcoholic, a compulsive debtor, and I'm in recovery.</p>
                <p>I grew up with a pretty dysfunctional childhood, with an abusive alcoholic father, a loving mother who worked multiple jobs. I isolated heavily from the outside world, developed unhealthy standards for intimacy and relationships.</p>
                <p>It wasn't until I consistently went to meetings, that I discovered my issues with boundaries and trust. I placed a lot of emotional attachment to my work, for both my successes and failures. I've tried to control outcomes and situations based on fear, which ultimately is out of my control.</p>
                <p>I’ve also spent time facilitating meetings and becoming more engaged in my recovery. This is my social impact &amp; community service project, born out of experience and the pursuit of love, awareness and recovery.</p>
              </Col>
              <Col md={5} className="order-md-1">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={me} />
              </Col>
            </Row>
            <hr className="featurette-divider" />
            <Row className="featurette">
              <Col md={7} className="order-md-1">
                <h2 className="featurette-heading">And the <span className="text-muted">User Experience (UX) Process.</span></h2>
                <p className="lead">How much impact could your story have on others from the local community to across the world?</p>
                <p>The User Experience (UX) design approach allows for <br />
                  <ul>
                    <li>Discovery &amp; Research,</li>
                    <li>Sketching &amp; Ideation,</li>
                    <li>Narrowing Scope &amp; Defining Structure</li>
                    <li>Prototyping &amp; Testing</li>
                  </ul>
                </p>
                <p>Through this process, we discover the success and failures around our user along with the pain they've experienced.</p>
                <p>From hearing their story, we can then start solving for their true needs.</p>
              </Col>
              <Col md={5} className="order-md-2">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={ux_logo} />
              </Col>
            </Row>
            <hr className="featurette-divider"></hr>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
