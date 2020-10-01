import React, { useState } from "react";
import Menu from "./Menu";
import "../App.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function SplashPage() {
	return (
		<>
			<Menu />
			<Container fluid>
				<Row noGutters>
					<Col class='mx-auto'>
						<h1 class='display-4' style={{ textAlign: "center" }}>
							Welcome To
						</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<h1 class='display-1' style={{ textAlign: "center" }}>
							🤑
						</h1>
					</Col>
					<Col>
						<h1 class='display-1 text-nowrap' style={{ textAlign: "center" }}>
							Muh Bagz!
						</h1>
					</Col>
					<Col>
						<h1 class='display-1' style={{ textAlign: "center" }}>
							😭
						</h1>
					</Col>
				</Row>
				<Row></Row>
				<Row>
					<Col>
						<h1 class='display-4 text-nowrap' style={{ textAlign: "center" }}>
							Make Gainz!
						</h1>
						<Image 
							class='justify-content-md-left'
							src="https://media.giphy.com/media/ADgfsbHcS62Jy/giphy.gif"
							/>
					</Col>
					<Col>
						<Image
							class='justify-content-md-center'
							className='splashImg'
							src='https://media.giphy.com/media/tQ4Ppppmjy3jVS7H2Y/giphy.gif'
						/>
					</Col>
					<Col>
						<h1 class='display-4 text-nowrap' style={{ textAlign: "center" }}>
							Don't Get Rekt!
						</h1>
					</Col>
					
					</Row>
				
				
			</Container>
		</>
	);
}

export default SplashPage;
