import React, { useState, useRef } from "react";
import { Navbar, Nav, Overlay, Tooltip } from "react-bootstrap";

function Menu() {
	return (
		<Navbar variant='light' expand='md'>
			<Navbar.Brand href='#home'>📈📉</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav>
					<Nav.Link href='#home'>Home🏠</Nav.Link>

					<Nav.Link href='#link'>Muh Bagz💰</Nav.Link>
					<Nav.Link href='#signin'>Sign In🔑</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Menu;
