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
					<Col
						align='left'
						xs={{ span: 12, order: 2 }}
						sm={{ span: 12, order: 2 }}
						md={{ span: 12, order: 2 }}
						xl={{ span: 4, order: 1 }}
					>
						<h1 class='display-1' style={{ textAlign: "center" }}>
							🤑
						</h1>
						<h1
							align='center'
							class='display-4 text-nowrap'
							style={{ textAlign: "center" }}
						>
							Make Gainz!
						</h1>
					</Col>
					<Col
						align='center'
						xs={{ span: 12, order: 1 }}
						sm={{ span: 12, order: 1 }}
						md={{ span: 12, order: 1 }}
						xl={{ span: 4, order: 2 }}
					>
						<h1 class='display-1 text-nowrap' style={{ textAlign: "center" }}>
							Muh-Bagz!
						</h1>
						<Image
							class='d-block mx-auto img-fluid'
							className='splashImg'
							src='https://media.giphy.com/media/tQ4Ppppmjy3jVS7H2Y/giphy.gif'
						/>
					</Col>
					<Col
						align='right'
						style={{ paddingLeft: "4px" }}
						xs={{ span: 12, order: 3 }}
						sm={{ span: 12, order: 3 }}
						md={{ span: 12, order: 3 }}
						xl={{ span: 4, order: 3 }}
					>
						<h1 class='display-1' style={{ textAlign: "center" }}>
							😭
						</h1>
						<h1 class='display-4 text-nowrap' style={{ textAlign: "center" }}>
							Get Rekt!
						</h1>
					</Col>
				</Row>
				<Row></Row>
				<Row>
					<Col></Col>
					<Col align='center'></Col>
					<Col></Col>
				</Row>
			</Container>
		</>
	);
}

export default SplashPage;
