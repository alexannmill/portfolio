/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Styles/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
	return (
		<div>
			<Navbar className='navbar' fixed='top' expand='lg'>
				<Container>
					<Navbar.Brand href='/'>
						<h1 className='logo'>
							<FontAwesomeIcon icon={faTerminal} />
							<strong>@|ex Mi||er</strong>
						</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='/'>// About</Nav.Link>
							<Nav.Link href='/skills'>// Skills </Nav.Link>
							<Nav.Link href='/projects'>// Projects</Nav.Link>
							<Nav.Link href='/contact'>// Contact</Nav.Link>
							{/* <Nav.Link href='/beerblog'>// BeerBlog</Nav.Link> */}
							<Nav.Link
								href='https://docs.google.com/document/d/e/2PACX-1vRcPQM5MEqFcaweZ-DP_fYSzJ5wnkDl-6fEeZ_799kjUNDDl5vtxjbKhxrKKBSn8Qh_og_QoCu36QBs/pub'
								target='_blank'
							>
								// Resume
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
