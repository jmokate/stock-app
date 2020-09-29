import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

function SplashPage() {
	return (
		<Navbar variant='light' expand='lg'>
			<Navbar.Brand href='#home'>Muh Bagz</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#link'>Account</Nav.Link>
					<Nav.Link href='#signin'>Sign In</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default SplashPage;
