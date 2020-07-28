import React from "react";

export function Card() {
	const cardTitles = [
		{
			title: "card1",
			imgUrl: "https://www.wv.gov/images/homebkg.jpg"
		},
		{
			title: "card2",
			imgUrl:
				"https://www.google.com/search?q=puppy&tbm=isch&ved=2ahUKEwjUnOGTtvDqAhWuazABHcuoAHEQ2-cCegQIABAA&oq=puppy&gs_lcp=CgNpbWcQAzIECCMQJzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQsQMyBQgAELEDMgUIABCxAzoCCABQ2ChY3DJg_jRoAHAAeACAAWCIAakDkgEBNZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=0FkgX9T0KK7XwbkPy9GCiAc&bih=723&biw=708&rlz=1C5CHFA_enUS909US909#imgrc=UCqmZQ78EtHrYM"
		},
		{
			title: "card3",
			imgUrl:
				"https://www.google.com/search?q=puppy&tbm=isch&ved=2ahUKEwjUnOGTtvDqAhWuazABHcuoAHEQ2-cCegQIABAA&oq=puppy&gs_lcp=CgNpbWcQAzIECCMQJzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQsQMyBQgAELEDMgUIABCxAzoCCABQ2ChY3DJg_jRoAHAAeACAAWCIAakDkgEBNZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=0FkgX9T0KK7XwbkPy9GCiAc&bih=723&biw=708&rlz=1C5CHFA_enUS909US909#imgrc=UCqmZQ78EtHrYM"
		},
		{
			title: "card4",
			imgUrl:
				"https://www.google.com/search?q=puppy&tbm=isch&ved=2ahUKEwjUnOGTtvDqAhWuazABHcuoAHEQ2-cCegQIABAA&oq=puppy&gs_lcp=CgNpbWcQAzIECCMQJzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQsQMyBQgAELEDMgUIABCxAzoCCABQ2ChY3DJg_jRoAHAAeACAAWCIAakDkgEBNZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=0FkgX9T0KK7XwbkPy9GCiAc&bih=723&biw=708&rlz=1C5CHFA_enUS909US909#imgrc=UCqmZQ78EtHrYM"
		}
	];
	const cardList = cardTitles.map(function(hand, i) {
		return (
			<div className="card m-1" key={i} style={{ width: "18rem" }}>
				<img src={hand.imgUrl} className="card-img-top" alt=".." />
				<div className="card-body">
					<h5 className="card-title">{hand.title}</h5>
					<p className="card-text">{hand.message}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});

	return <div className="d-flex justify-content-center">{cardList}</div>;
}
