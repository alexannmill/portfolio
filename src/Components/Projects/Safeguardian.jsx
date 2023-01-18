import { Card, Button } from "react-bootstrap";
import SGimage from "../imgs/safeguardian.png";

export default function Safeguardian() {
  return (
    <Card className="safeguardian" style={{ width: "60vw" }}>
      <Card.Img variant="top" src={SGimage} alt="Safeguardian Image" />
      <Card.Body>
        <Card.Title className="project-title">Safeguardian 📍</Card.Title>
        <Card.Text>
          <strong>Work-in-progress:</strong> A map application for unhoused
          people to find resources. Hoping one day mall-screen kiosk are up
          around the city giving information to those in need.
        </Card.Text>
        <Button
          href="https://github.com/alexannmill/safeguardian"
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
