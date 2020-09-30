import React, { useState, useRef } from "react";
import { Navbar, Nav, Overlay, Tooltip } from "react-bootstrap";

function Menu() {
	const [isHover, setHover] = useState(false);
	const target = useRef(null);

	return (
		<Navbar variant='light' expand='md'>
			<Navbar.Brand href='#home'>Muh Bagz</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav>
					<Nav.Link
						ref={target}
						onMouseOver={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						href='#home'
					>
						🏠
					</Nav.Link>
					<Overlay target={target.curent} show={isHover} placement='top'>
						{props => <Tooltip class='home-tip'>Home</Tooltip>}
					</Overlay>
					<Nav.Link href='#link'>💰</Nav.Link>
					<Nav.Link href='#signin'>Sign In</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Menu;
