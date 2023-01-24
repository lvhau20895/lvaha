/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect } from "react";
import { signIn } from "../../../modules/Authentication/Slice/authSlice";

import main from "./mainLayout.module.scss";

const MainLayout = () => {
	const { user, token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(signIn(token));
	}, []);

	const userInfo = Object.assign({}, ...user);

	return (
		<section className={main.mainLayout}>
			<div className={main.mainLeft}>
				<SideBar />
			</div>

			<div className={main.mainRight}>
				<div className={main.mainHeader}>
					<Header user={userInfo} />
				</div>

				<div className={main.mainOutlet}>
					<Outlet />
				</div>
			</div>
		</section>
	);
};

export default MainLayout;
