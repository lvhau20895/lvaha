import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { HiOutlineKey } from "react-icons/hi";
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../Slice/authSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import login from "./login.module.scss";

const Login = () => {
	const [showPassLogin, setShowPassLogin] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { users } = useSelector((state) => state.auth);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			account: "",
			password: "",
		},
		mode: "onSubmit",
	});

	const Modal = withReactContent(Swal);

	const onSubmit = (values) => {
		const userLogin = users.find(
			(user) =>
				user.account === values.account && user.password === values.password
		);

		if (userLogin === undefined) {
			Modal.fire({
				icon: "warning",
				title: "Tài Khoản Hoặc Mật Khẩu Không Đúng",
				showConfirmButton: false,
				showDenyButton: true,
				denyButtonText: "Đóng",
				customClass: {
					title: "swal2-title-alert",
				},
			});
			return;
		}

		// await dispatch(signIn(userLogin.id)).unwrap();
		dispatch(setToken(userLogin.token));
		Modal.fire({
			icon: "success",
			title: "Đăng Nhập Thành Công",
			showConfirmButton: false,
			timer: 1000,
			customClass: { title: "swal2-title-alert" },
		});
		setTimeout(() => {
			navigate("/", { replace: true });
		}, 1000);
	};

	const handleForgot = () => {
		navigate("/forgot");
	};

	return (
		<section className={login.login}>
			<div className={login.loginForm}>
				<div className={login.loginHeader}>
					<img src="./img/logo/logo.png" alt="logo" />
					<h1 className={login.loginTitle}>Đăng Nhập</h1>
				</div>

				<form className={login.loginBody} onSubmit={handleSubmit(onSubmit)}>
					{/* Account */}
					<div className={login.loginGroup}>
						<div className={login.loginBox}>
							<div className={login.loginIcon}>
								<BiUser />
							</div>
							<div className={login.loginField}>
								<input
									id="account"
									type="text"
									placeholder=" "
									spellCheck="false"
									autoComplete="off"
									{...register("account", {
										required: {
											value: true,
											message: "Vui lòng nhập tài khoản",
										},
										minLength: {
											value: 5,
											message: "Tài khoản phải từ 5 đến 20 ký tự",
										},
										maxLength: {
											value: 20,
											message: "Tài khoản phải từ 5 đến 20 ký tự",
										},
									})}
								/>
								<label htmlFor="account">Tài khoản</label>
							</div>
						</div>
						{errors.account && (
							<p className={login.loginError}>{errors.account.message}</p>
						)}
					</div>

					{/* Password */}
					<div className={login.loginGroup}>
						<div className={login.loginBox}>
							<span className={login.loginIcon}>
								<HiOutlineKey />
							</span>
							<div className={login.loginField}>
								<input
									id="password"
									type={showPassLogin ? "text" : "password"}
									placeholder=" "
									spellCheck="false"
									autoComplete="off"
									{...register("password", {
										required: {
											value: true,
											message: "Vui lòng nhập mật khẩu",
										},
										minLength: {
											value: 5,
											message: "Mật khẩu phải từ 5 đến 10 ký tự",
										},
										maxLength: {
											value: 10,
											message: "Mật khẩu phải từ 5 đến 10 ký tự",
										},
									})}
								/>
								<label htmlFor="password">Mật khẩu</label>
								<span
									className={login.loginShowPass}
									onClick={() => setShowPassLogin(!showPassLogin)}
								>
									{showPassLogin ? <RiEye2Line /> : <RiEyeCloseLine />}
								</span>
							</div>
						</div>
						{errors.password && (
							<p className={login.loginError}>{errors.password.message}</p>
						)}
					</div>

					{/* Login */}
					<div className={login.loginButton}>
						<button>Đăng Nhập</button>
					</div>
				</form>

				<div className={login.loginFooter}>
					<p className={login.loginToRegister}>
						Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
					</p>
					<span className={login.loginForgot} onClick={handleForgot}>
						Quên mật khẩu?
					</span>
				</div>
			</div>
		</section>
	);
};

export default Login;
