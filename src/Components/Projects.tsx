import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HungryDev from "./Projects/HungyDev";
import Interviewer from "./Projects/Interviewer";
import Jungle from "./Projects/Jungle";
import Safeguardian from "./Projects/Safeguardian";
import WhatsBrewin from "./Projects/WhatsBrewin";
import "./Styles/Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <Carousel>
          <Carousel.Item>
            <Safeguardian />
          </Carousel.Item>
          <Carousel.Item>
            <WhatsBrewin />
          </Carousel.Item>
          <Carousel.Item>
            <HungryDev />
          </Carousel.Item>
          <Carousel.Item>
            <Interviewer />
          </Carousel.Item>
          <Carousel.Item>
            <Jungle />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
