import { Card, Button } from "react-bootstrap";

export default function WhatsBrewin() {
  return (
    <Card className="whats-brewing" style={{ width: "60vw" }}>
      <Card.Img
        variant="top"
        src="https://media.istockphoto.com/id/1225201968/photo/hand-in-a-pop-art-collage-style-in-neon-bold-colors-modern-psychedelic-creative-element-with.jpg?b=1&s=612x612&w=0&k=20&c=HkQC8zYzUFoIc-k0YHFTja2PtOTukpJWsqW8e6tRo-c="
      />
      <Card.Body>
        <Card.Title>What's Brewin'</Card.Title>
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
        >
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
