import React from "react";
import { Link } from "react-router-dom";

import logo from "./logo.module.scss";

const Logo = () => {
	return (
		<Link className={logo.logo}>
			<img src="/img/logo/logo.png" alt="logo" />
			<span to="" className={logo.logoTitle}>
				<span className={logo.logoFirstLetter}>L</span>
				vaha
			</span>
		</Link>
	);
};

export default Logo;
