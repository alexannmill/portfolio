import Carousel from "react-bootstrap/Carousel";
import HungryDev from "./Projects/HungyDev";
import Safeguardian from "./Projects/Safeguardian";
import WhatsBrewin from "./Projects/WhatsBrewin";
import "./Styles/Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <a id="projects">-</a>
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
