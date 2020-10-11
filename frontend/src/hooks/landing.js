import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import Avatar from "../components/Avatar";
import python_logo from "../assets/python_logo.png";
import circuit_logo from "../assets/circuit.png";
import ai_logo from "../assets/ai_logo.png";

const ImageIcons = styled(Avatar)`
  margin-left: 10px;
  margin-right: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const StyledInput = styled.input`
  margin-left: 10px;
`;

const Landing = () => {
  return (
    <div className="text-center cover-container d-flex  p-3 mx-auto flex-column">
      <Helmet>
        <title>Twelve : Welcome</title>
        <link rel="canonical" href="http://www.twelve.community" />
        <meta
          name="description"
          content="To create a safe and secure platform for all to share personal stories of recovery, become involved with our communities through service, guiding others through sponsorship, and supporting our local and global communities through charitable donation."
        />
        <meta
          name="keywords"
          content="Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology"
        />
      </Helmet>
      <main role="main" className="inner cover">
        <div className="jumbotron ">
          <ImageContainer>
            <ImageIcons image={python_logo} height={"100px"} width={"100px"} />

            <ImageIcons image={circuit_logo} height={"100px"} width={"100px"} />

            <ImageIcons image={ai_logo} height={"100px"} width={"100px"} />
          </ImageContainer>
        </div>
        <h1 className="cover-heading">Story Driven Recovery</h1>

        <p className="lead">
          Through machine-learning, artificial intelligence and the sharing of
          our own stories we can become involved with our communities through
          service, sponsorship, and support for our local and global
          communities.
        </p>

        <div className="mailchimp">
          <div id="mc_embed_signup">
            <form
              action="https://community.us17.list-manage.com/subscribe/post?u=a254665802cbb1a49a2513c1a&amp;id=b4cf8b1c8e"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">
                  Subscribe to hear about project updates.
                </label>
                <br />
                <input
                  type="email"
                  name="EMAIL"
                  className="email form-control"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                />

                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_a254665802cbb1a49a2513c1a_b4cf8b1c8e"
                    tabIndex="-1"
                  />
                </div>
                <div className="clear">
                  <StyledInput
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="btn btn-success"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
