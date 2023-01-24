import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Trends from "../components/Trends";

import home from "./home.module.scss";

const Home = () => {
	return (
		<section className={home.home}>
			<div className={home.homeBanner}>
				<Banner />
			</div>

			<div className={home.homeMenu}>
				<Menu />
			</div>

			<div className={home.homeTrends}>
				<Trends />
			</div>

			<div className={home.homeFooter}>
				<Footer />
			</div>
		</section>
	);
};

export default Home;
