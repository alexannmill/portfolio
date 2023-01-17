import { Card, Button } from "react-bootstrap";
import hungrydevIMG from "../imgs/hungrydev.png";


export default function HungryDev() {
  return (
    <Card className="hungry-dev" style={{ width: "60vw" }}>
      <Card.Img variant="top" src={hungrydevIMG} alt="Hungry Dev IMG" />
      <Card.Body>
        <Card.Title className="project-title">The Hungry Dev 🐍 </Card.Title>
        <Card.Text>
          <a href="https://the-hungry-dev.netlify.app">Click Here to Play!</a>
          <br />A GitHub commit themed snake game. This is a quick game for
          landing or loading pages. Open to all, feel free to insert into your
          work! Using Vanilla JS, HTML, and CSS.
        </Card.Text>
        <Button
          href="https://github.com/alexannmill/the.very.hungry.dev"
          variant="dark"
          target="_blank"
          className="github-btn"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
            alt="Alex Miller Github"
            height="30"
            width="40"
          />
        </Button>
      </Card.Body>
    </Card>
  );
}
