import React from "react";
import Logo from "../../../Logo";
import { NavLink } from "react-router-dom";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { FaTh } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { RiCustomerService2Fill } from "react-icons/ri";

import sideBar from "./sideBar.module.scss";

const SideBar = () => {
	return (
		<section className={sideBar.sideBar}>
			{/* Logo */}
			<div className={sideBar.sideBarLogo}>
				<Logo />
			</div>

			{/* Navigation */}
			<nav>
				{/* Home */}
				<div className={sideBar.sideBarItem}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? sideBar.sideBarActive : sideBar.sideBarLink
						}
					>
						<span className={sideBar.sideBarIconTitle}>
							<IoHome />
						</span>
						<span className={sideBar.sideBarTitle}>Trang chủ</span>
					</NavLink>
				</div>

				{/* Search */}
				<div className={`${sideBar.sideBarItem} ${sideBar.sideBarItemSearch}`}>
					<NavLink
						to="/products"
						className={({ isActive }) =>
							isActive ? sideBar.sideBarActive : sideBar.sideBarLink
						}
					>
						<span className={sideBar.sideBarIconTitle}>
							<GoSearch />
						</span>
					</NavLink>
				</div>

				{/* Products */}
				<div className={sideBar.sideBarItem}>
					<NavLink
						to="/products"
						end
						className={({ isActive }) =>
							isActive ? sideBar.sideBarActive : sideBar.sideBarLink
						}
					>
						<span className={sideBar.sideBarIconTitle}>
							<FaTh />
						</span>
						<span className={sideBar.sideBarTitle}>Sản phẩm</span>
					</NavLink>
				</div>

				{/* News */}
				<div className={sideBar.sideBarItem}>
					<NavLink
						to="/news"
						className={({ isActive }) =>
							isActive ? sideBar.sideBarActive : sideBar.sideBarLink
						}
					>
						<span className={sideBar.sideBarIconTitle}>
							<ImNewspaper />
						</span>
						<span className={sideBar.sideBarTitle}>Tin tức</span>
					</NavLink>
				</div>

				{/* Support */}
				<div className={`${sideBar.sideBarItem} ${sideBar.sideBarItemSupport}`}>
					<NavLink
						to="/support"
						className={({ isActive }) =>
							isActive ? sideBar.sideBarActive : sideBar.sideBarLink
						}
					>
						<span className={sideBar.sideBarIconTitle}>
							<RiCustomerService2Fill />
						</span>
						<span className={sideBar.sideBarTitle}>Hỗ trợ</span>
					</NavLink>
				</div>

				{/* Setting */}
				<div className={sideBar.sideBarItem}>
					<NavLink
						to="/setting"
						className={({ isActive }) =>
							isActive ? sideBar.sideBarActive : sideBar.sideBarLink
						}
					>
						<span className={sideBar.sideBarIconTitle}>
							<IoSettingsSharp />
						</span>
						<span className={sideBar.sideBarTitle}>Cài đặt</span>
					</NavLink>
				</div>
			</nav>

			{/* Co-Operate */}
			<div className={sideBar.sideBarIcon}>
				<a href="https://www.facebook.com/lvhau208">
					<img src="/img/icon/icon-facebook.webp" alt="facebook" />
				</a>
				<a href="https://www.youtube.com/channel/UCdPLXsB-wxGdEh4lOmsdUCw">
					<img src="/img/icon/icon-youtube.webp" alt="youtube" />
				</a>
				<a href="https://twitter.com/HuL87290554">
					<img src="/img/icon/icon-twitter.webp" alt="twitter" />
				</a>
				<a href="https://www.tiktok.com/@lvaha208?lang=vi-VN">
					<img src="/img/icon/icon-tiktok.webp" alt="tiktok" />
				</a>
			</div>
		</section>
	);
};

export default SideBar;
