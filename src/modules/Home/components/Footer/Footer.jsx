import React from "react";
import { BsFillPinMapFill } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";
import { FaPhoneVolume } from "react-icons/fa";

import footer from "./footer.module.scss";

const Footer = () => {
	return (
		<footer>
			{/* Info */}
			<div className={footer.footerInfo}>
				{/* Address */}
				<div className={footer.footerInfoItem}>
					<span className={footer.footerIcon}>
						<BsFillPinMapFill />
					</span>
					<span className={footer.footerDetails}>
						Long Phước, Long Thành, Đồng Nai
					</span>
				</div>

				{/* Email */}
				<div className={footer.footerInfoItem}>
					<span className={footer.footerIcon}>
						<GoMailRead />
					</span>
					<a
						href="mailto:levanhau.20081995@gmail.com"
						className={`${footer.footerDetails} ${footer.footerLink}`}
					>
						levanhau.20081995@gmail.com
					</a>
				</div>

				{/* Phone */}
				<div className={footer.footerInfoItem}>
					<span className={footer.footerIcon}>
						<FaPhoneVolume />
					</span>
					<a
						href="tel:0396195074"
						className={`${footer.footerDetails} ${footer.footerLink}`}
					>
						+84 396195074
					</a>
				</div>
			</div>

			{/* Copyright */}
			<div className={footer.footerCopyright}>
				<p>Copyright © 2022 Meta Platforms, Inc.</p>
			</div>
		</footer>
	);
};

export default Footer;
