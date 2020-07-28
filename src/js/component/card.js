import React from "react";

export function Card() {
	const cardTitles = ["card1", "card2", "card3", "card4"];
	const cardList = cardTitles.map(function(hand, i) {
		return (
			<div className="card m-1" key={i} style={{ width: "18rem" }}>
				<img src="..." className="card-img-top" alt=".." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						{
							"Some quick example text to build on the card title and make up the bulk of the card's content."
						}
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});

	return <div className="d-flex justify-content-center">{cardList}</div>;
}
