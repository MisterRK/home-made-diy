import React from "react";
import { Link } from 'react-router-dom'

//bootstrap imports
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Home-Made-DIY</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="/create-new-project">Create New Project</Nav.Link>
				</Nav>
				<Form inline>
					<Form.Control
						type="text"
						placeholder="Search"
						className="mr-sm-2"
					/>
					<Button variant="outline-success">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
