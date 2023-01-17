import { Card, Button } from "react-bootstrap";
import whatsbrewinIMG from "../imgs/whatsbrewing.png";

export default function WhatsBrewin() {
  return (
    <Card className="whats-brewing" style={{ width: "60vw" }}>
      <Card.Img variant="top" src={whatsbrewinIMG} alt="Whats Brewin IMG" />
      <Card.Body>
        <Card.Title className="project-title">What's Brewin' 🍺</Card.Title>
        <Card.Text>
          What's Brewin' a centralized platform to discover new breweries. We
          love beer and travel and wanted to give back to the breweries in all
          areas giving them a space to be easily discovered. This is our final
          project for Web Development Program at Lighthouse Labs made possible
          with the help of -
          <a href="https://www.openbrewerydb.org/" target="_blank">
            Open Brewery DB
          </a>
          .
        </Card.Text>
        <Button
          href="https://github.com/alexannmill/whats.brewin"
          variant="dark"
          target="_blank"
          className="github-btn"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="Alex Miller GitHub"
            height="30"
            width="40"
          />
        </Button>
      </Card.Body>
    </Card>
  );
}
