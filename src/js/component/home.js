import React, { Component } from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

export class Home extends Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Navbar />
				<Jumbotron />
				<Card />
				<Footer />
			</div>
		);
	}
}
