import React, { Component } from "react";

export class Card extends Component {
	constructor() {
		super();
		this.cardTitles = [
			{
				title: "Events",
				message: "Come check out the best events of 2020!",
				imgUrl: "https://www.timeout.com/miami/events-calendar"
			},
			{
				title: "Resturants",
				message: "Your guide to the best eateries in the area.",
				imgUrl:
					"https://img.theculturetrip.com/768x432/smart/wp-content/uploads/2015/12/driftwood-room.jpg"
			},
			{
				title: "Things to Do",
				message: "Daily updates for what to do in Miami",
				imgUrl:
					"https://www.water-sports-bali.com/about-wira-water-sports/"
			},
			{
				title: "Hotels",
				message:
					"Do you like going outside? Or doing something with the family? Here's your guide for what's happening aorund you.",
				imgUrl:
					"https://www.nationalgeographic.com/travel/destinations/north-america/united-states/florida/miami/"
			}
		];
	}

	render() {
		const cardList = this.cardTitles.map((hand, i) => {
			return (
				<div className="card m-3" key={i} style={{ width: "18rem" }}>
					<img src={hand.imgUrl} className="card-img-top" alt=".." />
					<div className="card-body">
						<h5 className="card-title">{hand.title}</h5>
						<p className="card-text">{hand.message}</p>
						<a href="#" className="btn btn-primary">
							Click Here
						</a>
					</div>
				</div>
			);
		});
		return <div className="d-flex justify-content-center">{cardList}</div>;
	}
}
