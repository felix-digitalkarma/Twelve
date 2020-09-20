import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Hero from './Hero';

const HomePage = () => {

  return (
    <Container >
      <Row>
        <Col>
          <Hero />

          <div className="container marketing">
            <div className="row text-center">
              <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Anonymity</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2>Anonymity</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>

              </div>
              <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Recovery</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2>Recovery</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
              </div>
              <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Connection</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2>Connection</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Prelude</h2>
                <p className="lead">The pandemic has disrupted our way of living, how we connect to others through being present emotionally and physically. It has created isolation, despair and fear. For those that were on the path to recovery, suddenly being diverted off, needing to find their way. The pandemic has also revealed the need to still connect, even more now than ever. The engine being in-person meetings which provided a safe space to hear other stories that mirrored my own. To know that I wasn’t alone in my journey. For those that suffer in silence, please know that you are not alone.</p>
              </div>
              <div className="col-md-5 order-md-1">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
              </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">My Story</h2>
                <p className="lead">Hello, My name is Felix and I’m Codependent, a Child of an Alcoholic, Compulsive Debtor, and in recovery. I had a pretty dysfunctional childhood, with an abusive alcoholic father, a loving mother who worked multiple jobs, a family history that was bleak, filled with drama and turmoil. Growing up and carrying these problems with me, I noticed various problems in my life required a different group. I would have a hard time making time for different recovery group interaction juggling with work. There were various groups in my personal life that I’ve attended, AA, CoDA, Children of AA, Debtors Anonymous. I’ve served as a trusted servant, facilitating meetings and becoming more engaged in my recovery. This is my social impact / community service project, born out of experience and the pursuit of love, awareness and recovery.</p>
              </div>
              <div className="col-md-5 order-md-1">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
              </div>
            </div>
            <hr className="featurette-divider" />
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading">And the <span className="text-muted">User Experience (UX) Process.</span></h2>
                <p class="lead">How much impact would sharing your story have on others at the local community level to across the world.</p>
              </div>
              <div class="col-md-5">
                <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
              </div>
            </div>

            <hr class="featurette-divider"></hr>
          </div>


        </Col>
      </Row>

    </Container>
  )
}

export default HomePage
