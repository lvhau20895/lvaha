/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Tippy from "@tippyjs/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { getUsers } from "../../../modules/Authentication/Slice/authSlice";
import Mode from "../../Mode";
import Logo from "../../Logo";
import System from "../../System";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import authLayout from "./authLayout.module.scss";

const AuthLayout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { token } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	useEffect(() => {
		if (token) {
			navigate("/", { replace: true });
		}
	}, []);

	const Modal = withReactContent(Swal);

	const handleModel = (type) => {
		switch (type) {
			case "notification":
				Modal.fire({
					icon: "",
					title: "Thông Báo",
					html: (
						<>
							<p>
								<strong>20/08/2023:</strong> Sinh nhật Lvaha, mua 1 đơn tặng 1
								đơn tính tiền 2 đơn.
							</p>
							<p>
								<strong>10/10/2023:</strong> Đăng nhập nhận Voucher giảm giá 0%.
							</p>
						</>
					),
					showConfirmButton: false,
					showDenyButton: true,
					denyButtonText: "Đóng",
				});
				break;

			case "support":
				Modal.fire({
					icon: "",
					title: "Hỗ Trợ",
					html: (
						<>
							<p>
								Liên hệ tổng đài: <strong>0396195074</strong> để được hỗ trợ.
							</p>
						</>
					),
					showConfirmButton: false,
					showDenyButton: true,
					denyButtonText: "Đóng",
				});
				break;

			case "donate":
				Modal.fire({
					icon: "warning",
					title: "Sắp ra mắt",
					showConfirmButton: false,
					showDenyButton: true,
					denyButtonText: "Đóng",
					customClass: {
						title: "swal2-title-alert",
					},
				});
				break;
			default:
				return;
		}
	};

	return (
		<div className={authLayout.authLayout}>
			<div className={authLayout.authLogo}>
				<Logo />
			</div>

			<div className={authLayout.authLayoutSystem}>
				<System>
					<ul>
						<li>
							<Mode place="left" />
						</li>

						{/* Alert Events */}
						<Tippy
							content={<p>Thông báo</p>}
							animation="scale"
							placement="left"
							theme="theme"
						>
							<li onClick={() => handleModel("notification")}>
								<MdEventNote />
							</li>
						</Tippy>

						{/* Support */}
						<Tippy
							content={<p>Hỗ trợ</p>}
							animation="scale"
							placement="left"
							theme="theme"
						>
							<li onClick={() => handleModel("support")}>
								<RiCustomerService2Fill />
							</li>
						</Tippy>

						{/* Donate */}
						<Tippy
							content={<p>Ủng hộ</p>}
							animation="scale"
							placement="left"
							theme="theme"
						>
							<li onClick={() => handleModel("donate")}>
								<BiDonateHeart />
							</li>
						</Tippy>
					</ul>
				</System>
			</div>

			<Outlet />
		</div>
	);
};

export default AuthLayout;
