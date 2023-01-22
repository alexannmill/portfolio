import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState<{submitted:null | boolean}>({submitted:null});

  const handleSubmit = (e) => {
    setTimeout(() => {
      return setSubmitted({submitted:true});
    }, 100);
  }

  if (submitted) {
    return (
      <div className="thankyou">
        <h1>Thank you!</h1>
        <h3> We'll be in touch soon.</h3>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSubmitted({submitted:null});
          }}
        >
          Forgot something? Send Another!
        </Button>
      </div>
    );
  }

  return (
    <div className="form">
      <Form
        action="https://public.herotofu.com/v1/ca7790a0-7e6a-11ed-b38f-a1ed22f366b1"
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="project-title">Name</Form.Label>
          <Form.Control
            className="project-title"
            type="name"
            name="name"
            placeholder="Enter Your Name"
            // required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="project-title">Email</Form.Label>
          <Form.Control
            className="project-title"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            // required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label className="project-title">Message</Form.Label>
          <Form.Control
            className="project-title"
            as="textarea"
            placeholder="Enter Your Message"
            rows={3}
            name="message"
            // required
          />
        </Form.Group>
        <div className="submitbtn">
          <Button className="contact-btn" variant="primary" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
}
