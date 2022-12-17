import { Card, Button } from "react-bootstrap";

export default function HungryDev() {
  return (
    <Card className="hungry-dev" style={{ width: "25rem" }}>
      <Card.Img
        variant="top"
        src="https://media.istockphoto.com/id/1225201968/photo/hand-in-a-pop-art-collage-style-in-neon-bold-colors-modern-psychedelic-creative-element-with.jpg?b=1&s=612x612&w=0&k=20&c=HkQC8zYzUFoIc-k0YHFTja2PtOTukpJWsqW8e6tRo-c="
      />
      <Card.Body>
        <Card.Title>The Hungry Dev 🐍 </Card.Title>
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
        >
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
