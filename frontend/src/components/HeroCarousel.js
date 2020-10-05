import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

// import css
import "react-responsive-carousel/lib/styles/carousel.min.css";

// assets
import * as Img1 from "../assets/crp_unsplash.jpg";
import * as Img2 from "../assets/daanstevens_group.jpg";

const SlideContainer = styled.div`
  img {
    max-height: 420px;
    object-fit: cover;
  }
`;

const HeroCarousel = () => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      <SlideContainer>
        <img src={Img1} width="400px" />
        <p className="legend">meaningful personal recovery awareness</p>
      </SlideContainer>
      <SlideContainer>
        <img src={Img2} />
        <p className="legend">meaningful personal recovery awareness</p>
      </SlideContainer>
    </Carousel>
  );
};

export default HeroCarousel;
