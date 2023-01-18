import { Card, Button } from "react-bootstrap";
import Interviewerimage from "../imgs/interviewer.png";

export default function Interviewer() {
  return (
    <Card className="interviewer" style={{ width: "60vw" }}>
      <Card.Img variant="top" src={Interviewerimage} alt="interviewer Image" />
      <Card.Body>
        <Card.Title className="project-title">Interviewer 📆</Card.Title>
        <Card.Text>
          Front-end focused app for scheduling interviews build with React.js.
          Testing with Storybook and Jest
        </Card.Text>
        <Button
          href="https://github.com/alexannmill/interviewer"
          variant="dark"
          target="_blank"
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
