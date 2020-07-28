import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="card text-center">
					<div className="card-header">Ideas?</div>
					<div className="card-body">
						<h5 className="card-title">
							Reach out to us at any time for
							questions/concerns/ideas!{" "}
						</h5>
						<p className="card-text">
							Thank You for Visiting our Site!
						</p>
						<a href="#" className="btn btn-primary">
							Contact Us
						</a>
					</div>
					<div className="card-footer text-muted">
						Copyright @ 2020
					</div>
				</div>
			</div>
		);
	}
}
