/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Styles/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div>
			<Navbar className='navbar' fixed='top' expand='lg'>
				<Container>
					<Link to='/' className='nav-link'>
						<Navbar.Brand href='/portfolio/'>
							<h1 className='logo'>
								<FontAwesomeIcon icon={faTerminal} />
								<strong>@|ex Mi||er</strong>
							</h1>
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Link to='/' className='nav-link'>
								<Nav.Link>// About</Nav.Link>
							</Link>
							<Link to='/skills' className='nav-link'>
								<Nav.Link>// Skills </Nav.Link>
							</Link>
							<Link to='/projects' className='nav-link'>
								<Nav.Link>// Projects</Nav.Link>
							</Link>
							<Link to='/contact' className='nav-link'>
								<Nav.Link>// Contact</Nav.Link>
							</Link>
							<Nav.Link
								href='https://docs.google.com/document/d/e/2PACX-1vRcPQM5MEqFcaweZ-DP_fYSzJ5wnkDl-6fEeZ_799kjUNDDl5vtxjbKhxrKKBSn8Qh_og_QoCu36QBs/pub'
								target='_blank'
							>
								// Resume
							</Nav.Link>
							{/* <Nav.Link href='/beerblog'>// BeerBlog</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
