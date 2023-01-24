import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import {
	AiOutlineHistory,
	AiOutlineLogout,
	AiOutlineUser,
} from "react-icons/ai";
import { RiVipCrown2Line } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../../../../modules/Authentication/Slice/authSlice";
import { Spin as Hamburger } from "hamburger-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import guest from "./guest.module.scss";
import useCheckedOutside from "../../../../../hooks/useCheckedOutside";

const Guest = ({ userInfo }) => {
	const [openSideBar, setOpenSideBar] = useState(false);
	const [showGuest, setShowGuest] = useState(false);

	const menuRef = useRef();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useCheckedOutside(menuRef, () => setShowGuest(false));

	const Modal = withReactContent(Swal);

	const handleLogout = () => {
		Modal.fire({
			icon: "warning",
			title: "Bạn Có Muốn Đăng Xuất?",
			showCancelButton: true,
			cancelButtonText: "Không",
			confirmButtonText: "Có",
			customClass: { title: "swal2-title-alert" },
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(logout());
				navigate("/login");
			}
		});
	};

	const handleClose = () => {
		setOpenSideBar(false);
	};

	return (
		<>
			{/* User Action Desktop */}
			<section
				ref={menuRef}
				className={guest.guest}
				onClick={() => setShowGuest(!showGuest)}
			>
				<div className={guest.guestAvatar}>
					{userInfo.image ? (
						<img src={userInfo.image} alt="avatar" />
					) : (
						<p>{userInfo.account?.slice(0, 1).toUpperCase()}</p>
					)}
				</div>
				<span className={guest.guestDetails}>
					<BsThreeDots />
				</span>

				<div
					style={{
						transform: showGuest ? "scale(1)" : "scale(0)",
						opacity: showGuest ? 1 : 0,
						top: userInfo.type === "admin" ? "50px" : "0",
					}}
					className={guest.guestAction}
				>
					<Link>
						<span>Thông tin cá nhân</span>
						<span className={guest.guestIcon}>
							<AiOutlineUser />
						</span>
					</Link>

					<Link>
						<span>Lịch sử giao dịch</span>
						<span className={guest.guestIcon}>
							<AiOutlineHistory />
						</span>
					</Link>

					<Link>
						<span>Nâng cấp tài khoản</span>
						<span className={guest.guestIcon}>
							<RiVipCrown2Line />
						</span>
					</Link>

					<Link onClick={handleLogout}>
						<span>Đăng xuất</span>
						<span className={guest.guestIcon}>
							<AiOutlineLogout />
						</span>
					</Link>

					{userInfo.type === "admin" && (
						<Link to="/admin">
							<span>Admin</span>
							<span className={guest.guestIcon}>
								<MdOutlineAdminPanelSettings />
							</span>
						</Link>
					)}
				</div>
			</section>

			{/* User Action Mobile */}
			<section className={guest.guestMobile}>
				<div className={guest.guestMenuToggle}>
					<Hamburger
						size={25}
						direction="right"
						color="#ca8c2f"
						toggled={openSideBar}
						toggle={setOpenSideBar}
					/>
				</div>

				<div
					style={{
						transform: openSideBar ? "translateX(0)" : "translateX(-100%)",
						opacity: openSideBar ? "1" : "0",
					}}
					className={guest.guestActionMobile}
				>
					{/* Action */}
					<div className={guest.guestDetailsMobile}>
						<div className={guest.guestInfoUserMobile}>
							{userInfo.image ? (
								<img src={userInfo.image} alt="avatar" />
							) : (
								<p>{userInfo.account?.slice(0, 1).toUpperCase()}</p>
							)}
							<p className={guest.guestTypeMobile}>{userInfo.type}</p>
						</div>

						<Link>
							<span className={guest.guestIconMobile}>
								<AiOutlineUser />
							</span>
							<span>Thông tin cá nhân</span>
						</Link>

						<Link>
							<span className={guest.guestIconMobile}>
								<AiOutlineHistory />
							</span>
							<span>Lịch sử giao dịch</span>
						</Link>

						<Link>
							<span className={guest.guestIconMobile}>
								<RiVipCrown2Line />
							</span>
							<span>Nâng cấp tài khoản</span>
						</Link>

						<Link onClick={handleLogout}>
							<span className={guest.guestIconMobile}>
								<AiOutlineLogout />
							</span>
							<span>Đăng xuất</span>
						</Link>

						{userInfo.type === "admin" && (
							<Link>
								<span className={guest.guestIconMobile}>
									<MdOutlineAdminPanelSettings />
								</span>
								<span>Admin</span>
							</Link>
						)}
					</div>

					{/* Co-Operate */}
					<div className={guest.guestSocialNetworkMobile}>
						<a href="https://www.facebook.com/lvhau208">
							<img src="./img/icon/icon-facebook.webp" alt="facebook" />
						</a>
						<a href="https://www.youtube.com/channel/UCdPLXsB-wxGdEh4lOmsdUCw">
							<img src="./img/icon/icon-youtube.webp" alt="youtube" />
						</a>
						<a href="https://twitter.com/HuL87290554">
							<img src="./img/icon/icon-twitter.webp" alt="twitter" />
						</a>
						<a href="https://www.tiktok.com/@lvaha208?lang=vi-VN">
							<img src="./img/icon/icon-tiktok.webp" alt="tiktok" />
						</a>
					</div>
				</div>

				{/* Overlay */}
				<div
					style={{
						visibility: openSideBar ? "visible" : "hidden",
						opacity: openSideBar ? "1" : "0",
					}}
					className={guest.guestOverlayMobile}
					onClick={handleClose}
				></div>
			</section>
		</>
	);
};

export default Guest;
