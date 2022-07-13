import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="bg-dark py-4 mt-auto">
		<div className="container px-5">
			<div className="row align-items-center justify-content-between flex-column flex-sm-row">
				<div className="col-auto">
					<div className="small m-0 text-white">
						Copyright © Your Website 2022
					</div>
				</div>
				<div className="col-auto">
					<Link className="link-light small" href="#!">
						Privacy
					</Link>
					<span className="text-white mx-1">·</span>
					<Link className="link-light small" href="#!">
						Terms
					</Link>
					<span className="text-white mx-1">·</span>
					<Link className="link-light small" href="#!">
						Contact
					</Link>
				</div>
			</div>
		</div>
	</footer>
);