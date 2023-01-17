import { Card, Button } from "react-bootstrap";
import jungleIMG from "../imgs/jungle.png";

export default function Jungle() {
  return (
    <Card className="jungle" style={{ width: "60vw" }}>
      <Card.Img variant="top" src={jungleIMG} alt="Jungle IMG" />
      <Card.Body>
        <Card.Title className="project-title">Jungle 🌱 </Card.Title>
        <Card.Text>
          <br />A mini e-commerce application built with Ruby on Rails with
          Active Record.
        </Card.Text>
        <Button
          href="https://github.com/alexannmill/jungle"
          variant="dark"
          target="_blank"
          className="github-btn"
        >
          <a href="https://github.com/alexannmill" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="Alex Miller Github"
              height="30"
              width="40"
            />
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}
