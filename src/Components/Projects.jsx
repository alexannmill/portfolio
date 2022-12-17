import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import HungryDev from "./Projects/HungyDev";
import Safeguardian from "./Projects/Safeguardian";
import WhatsBrewin from "./Projects/WhatsBrewin";

export default function Projects() {
  return (
    <>
      <a id="projects">-</a>
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
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
