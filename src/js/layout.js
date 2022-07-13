import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { About } from "./views/about";
import { Contact } from "./views/contact";
import { Pricing } from "./views/pricing";
import { Faq } from "./views/faq";
import { Bloghome } from "./views/bloghome";
import { Blogpost } from "./views/blogpost";
import { Portfoliooverview } from "./views/portfoliooverview";
import { Portfolioitem } from "./views/portfolioitem";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/pricing">
							<Pricing />
						</Route>
						<Route exact path="/faq">
							<Faq />
						</Route>
						<Route exact path="/blog/home">
							<Bloghome />
						</Route>
						<Route exact path="/blog/post">
							<Blogpost />
						</Route>
						<Route exact path="/portfolio/overview">
							<Portfoliooverview />
						</Route>
						<Route exact path="/portfolio/item">
							<Portfolioitem />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
