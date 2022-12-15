import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

export default function Projects() {
  return (
    <div className="projects">
      <Carousel>
        <Carousel.Item>
          <Card className="safeguardian" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/1225201968/photo/hand-in-a-pop-art-collage-style-in-neon-bold-colors-modern-psychedelic-creative-element-with.jpg?b=1&s=612x612&w=0&k=20&c=HkQC8zYzUFoIc-k0YHFTja2PtOTukpJWsqW8e6tRo-c="
            />
            <Card.Body>
              <Card.Title>Safeguardian</Card.Title>
              <Card.Text>
                <strong>Work-in-progress:</strong> A map application for
                unhoused people to find resources. Hoping one day mall-screen
                kiosk are up around the city giving information to those in
                need.
              </Card.Text>
              <Button variant="dark">GitHub</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="hungry-dev" style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/1225201968/photo/hand-in-a-pop-art-collage-style-in-neon-bold-colors-modern-psychedelic-creative-element-with.jpg?b=1&s=612x612&w=0&k=20&c=HkQC8zYzUFoIc-k0YHFTja2PtOTukpJWsqW8e6tRo-c="
            />
            <Card.Body>
              <Card.Title>The Hungry Dev 🐍 </Card.Title>
              <Card.Text>
                <a href="https://the-hungry-dev.netlify.app">
                  Click Here to Play!
                </a>
                <br />A GitHub commit themed snake game. This is a quick game
                for landing or loading pages. Open to all, feel free to insert
                into your work! Using Vanilla JS, HTML, and CSS.
              </Card.Text>
              <Button
                href="https://github.com/alexannmill/the.very.hungry.dev"
                variant="dark"
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
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
  );
}
