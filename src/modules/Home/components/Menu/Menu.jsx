import React from "react";
import { Link } from "react-router-dom";
import {
	BsHeadphones,
	BsLaptop,
	BsPhone,
	BsSpeaker,
	BsTablet,
	BsWatch,
} from "react-icons/bs";

import menu from "./menu.module.scss";

const Menu = () => {
	return (
		<section className={menu.menu}>
			<div className={menu.menuTitle}>
				<h1>Danh Mục Nổi Bật</h1>
			</div>

			<div className={menu.menuList}>
				{/* Phone */}
				<div className={menu.menuItem}>
					<Link>
						<span className={menu.menuIcon}>
							<BsPhone />
						</span>
						<span className={menu.menuName}>Điện thoại</span>
					</Link>
				</div>

				{/* Laptop */}
				<div className={menu.menuItem}>
					<Link>
						<span className={menu.menuIcon}>
							<BsLaptop />
						</span>
						<span className={menu.menuName}>Máy tính</span>
					</Link>
				</div>

				{/* Tablet */}
				<div className={menu.menuItem}>
					<Link>
						<span className={menu.menuIcon}>
							<BsTablet />
						</span>
						<span className={menu.menuName}>Máy tính bảng</span>
					</Link>
				</div>

				{/* Watch */}
				<div className={menu.menuItem}>
					<Link>
						<span className={menu.menuIcon}>
							<BsWatch />
						</span>
						<span className={menu.menuName}>Đồng hồ</span>
					</Link>
				</div>

				{/* Headphone */}
				<div className={menu.menuItem}>
					<Link>
						<span className={menu.menuIcon}>
							<BsHeadphones />
						</span>
						<span className={menu.menuName}>Tai nghe</span>
					</Link>
				</div>

				{/* Speaker */}
				<div className={menu.menuItem}>
					<Link>
						<span className={menu.menuIcon}>
							<BsSpeaker />
						</span>
						<span className={menu.menuName}>Loa</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Menu;
