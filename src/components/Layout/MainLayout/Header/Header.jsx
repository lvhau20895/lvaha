import React from "react";
import Mode from "./../../../Mode";
import Logo from "./../../../Logo";
import Guest from "./Guest";
import Tippy from "@tippyjs/react";
import { FaShoppingCart } from "react-icons/fa";

import header from "./header.module.scss";
import Search from "./Search";

const Header = ({ user }) => {
	if (!user) return null;

	return (
		<>
			{/* Desktop */}
			<header>
				{/* Search */}
				<div className={header.headerSearch}>
					<Search />
				</div>

				{/* Logo */}
				<div className={header.headerLogo}>
					<Logo />
				</div>

				{/* Action */}
				<div className={header.headerAction}>
					{/* Mode */}
					<div className={header.headerMode}>
						<Mode place="bottom" />
					</div>

					{/* Cart */}
					<Tippy
						content={<p>Giỏ Hàng</p>}
						animation="scale"
						theme="theme"
						placement="bottom"
					>
						<div className={header.headerCart}>
							<FaShoppingCart />
						</div>
					</Tippy>

					{/* User */}
					<Guest userInfo={user} />
				</div>
			</header>
		</>
	);
};

export default Header;
