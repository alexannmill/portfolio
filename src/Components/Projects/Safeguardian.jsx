import { Card, Button } from "react-bootstrap";
import SGimage from "../imgs/safeguardian.png";

export default function Safeguardian() {
  return (
    <Card className="safeguardian" style={{ width: "60vw" }}>
      <Card.Img variant="top" src={SGimage} alt="Safeguardian Image" />
      <Card.Body>
        <Card.Title>Safeguardian 📍</Card.Title>
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
