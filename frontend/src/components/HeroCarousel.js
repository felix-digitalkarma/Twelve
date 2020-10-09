import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

// import css
import "react-responsive-carousel/lib/styles/carousel.min.css";

// assets
const amazonURL = "https://twelve-app.s3-us-west-1.amazonaws.com/";
const Img1 = amazonURL + "crp_unsplash.jpg";
const Img2 = amazonURL + "daanstevens_group.jpg";

const SlideContainer = styled.div`
  background-color: white;
  img {
    max-height: 420px;
    object-fit: cover;
  }
`;

const HeroCarousel = () => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      <SlideContainer>
        <img src={Img1} alt="" />
        <p className="legend">
          To create a safe and secure platform for all to share personal stories
          of recovery, become involved with our communities through service,
          guiding others through sponsorship, and supporting our local and
          global communities through charitable donation. <br />
          <br />
          <a
            href="https://forms.gle/VHt4Hrb9QGiBTVcWA"
            role="button"
            alt="Survey Form"
          >
            Take Survey
          </a>
        </p>
      </SlideContainer>
      <SlideContainer>
        <img src={Img2} alt="" />
        <p className="legend">
          Anonymity as a designing principle, recovery as a designing purpose,
          connection through modern technology. <br />
          <br />
          <a href="/stories" alt="user stories">
            User Stories
          </a>
        </p>
      </SlideContainer>
    </Carousel>
  );
};

export default HeroCarousel;
