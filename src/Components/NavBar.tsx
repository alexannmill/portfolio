/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Styles/NavBar.css";


export default function NavBar() {
  return (
    <Navbar className="navbar" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="logo">@|ex Mi||er</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">// About</Nav.Link>
            <Nav.Link href="#projects">// Projects</Nav.Link>
            <Nav.Link href="#contact">// Contact</Nav.Link>
            <Nav.Link href="#blog">// BeerBlog</Nav.Link>
            <Nav.Link href="github.com/alexannmill">// Github</Nav.Link>
            <Nav.Link
              href="https://resume.creddle.io/resume/idi71kas4cy"
              target="_blank"
            >
              {" "}
              // Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
