import { Card, Button } from "react-bootstrap";

export default function Safeguardian() {
  return (
    <Card className="safeguardian" style={{ width: "25rem" }}>
      <Card.Img
        variant="top"
        src="https://media.istockphoto.com/id/1225201968/photo/hand-in-a-pop-art-collage-style-in-neon-bold-colors-modern-psychedelic-creative-element-with.jpg?b=1&s=612x612&w=0&k=20&c=HkQC8zYzUFoIc-k0YHFTja2PtOTukpJWsqW8e6tRo-c="
      />
      <Card.Body>
        <Card.Title>Safeguardian</Card.Title>
        <Card.Text>
          <strong>Work-in-progress:</strong> A map application for unhoused
          people to find resources. Hoping one day mall-screen kiosk are up
          around the city giving information to those in need.
        </Card.Text>
        <Button
          href="https://github.com/alexannmill/safeguardian"
          variant="dark"
          target="_blank"
        >
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
