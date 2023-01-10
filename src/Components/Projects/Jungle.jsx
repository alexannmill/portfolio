import { Card, Button } from "react-bootstrap";
import jungleIMG from "../imgs/jungle.png";

export default function Jungle() {
  return (
    <Card className="jungle" style={{ width: "60vw" }}>
      <Card.Img variant="top" src={jungleIMG} alt="Jungle IMG" />
      <Card.Body>
        <Card.Title>Jungle 🌱 </Card.Title>
        <Card.Text>
          <br />A mini e-commerce application built with Ruby on Rails with
          Active Record.
        </Card.Text>
        <Button
          href="https://github.com/alexannmill/jungle"
          variant="dark"
          target="_blank"
        >
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
