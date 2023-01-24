/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BiLock, BiUser } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";
import { ImArrowLeft2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../Slice/authSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import create from "./register.module.scss";

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { users } = useSelector((state) => state.auth);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: {
			account: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "onBlur",
	});

	const Modal = withReactContent(Swal);

	const handleShowPass = (type) => {
		if (type === "password") {
			setShowPassword(!showPassword);
		} else if (type === "confirm-password") {
			setShowConfirmPassword(!showConfirmPassword);
		}
	};

	const createToken = (length) => {
		let defaultToken =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let newToken = "";

		for (let i = 0; i < length; i++)
			newToken += defaultToken.charAt(
				Math.floor(Math.random() * defaultToken.length)
			);

		return newToken;
	};

	const onSubmit = async (values) => {
		const token = createToken(100);
		delete values.confirmPassword;
		const index = users.findIndex((user) => user.account === values.account);

		if (index !== -1) {
			Modal.fire({
				icon: "warning",
				title: "Tài Khoản Đã Tồn Tại",
				showConfirmButton: false,
				showDenyButton: true,
				denyButtonText: "Đóng",
				customClass: { title: "swal2-title-alert" },
			});
			return;
		}

		try {
			await dispatch(createAccount({ token, values })).unwrap();
			Modal.fire({
				icon: "success",
				title: "Đăng Ký Thành Công",
				showConfirmButton: false,
				timer: 1000,
				customClass: { title: "swal2-title-alert" },
			});
			setTimeout(() => {
				navigate("/");
			}, 1000);
		} catch (error) {
			Modal.fire({
				icon: "error",
				title: "Đăng Ký Thất Bại",
				showConfirmButton: false,
				customClass: { title: "swal2-title-alert" },
			});
		}
	};

	return (
		<section className={create.register}>
			<div className={create.registerForm}>
				<div className={create.registerReturnLogin}>
					<Link to={-1}>
						<ImArrowLeft2 />
					</Link>
				</div>

				<div className={create.registerHeader}>
					<img src="./img/logo/logo.png" alt="logo" />
					<h1 className={create.registerTitle}>Đăng Ký</h1>
				</div>

				<form className={create.registerBody} onSubmit={handleSubmit(onSubmit)}>
					{/* Account */}
					<div className={create.registerGroup}>
						<div className={create.registerBox}>
							<div className={create.registerIcon}>
								<BiUser />
							</div>
							<div className={create.registerField}>
								<input
									id="account"
									type="text"
									placeholder=" "
									spellCheck="false"
									autoComplete="off"
									{...register("account", {
										required: {
											value: true,
											message: "Tài khoản không được để trống",
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
							<p className={create.registerError}>{errors.account.message}</p>
						)}
					</div>

					{/* Email */}
					<div className={create.registerGroup}>
						<div className={create.registerBox}>
							<div className={create.registerIcon}>
								<GoMail />
							</div>
							<div className={create.registerField}>
								<input
									id="email"
									type="email"
									placeholder=" "
									spellCheck="false"
									autoComplete="off"
									{...register("email", {
										required: {
											value: true,
											message: "Email không được để trống",
										},
										pattern: {
											value:
												/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
											message: "Email không đúng định dạng",
										},
									})}
								/>
								<label htmlFor="email">Email</label>
							</div>
						</div>
						{errors.email && (
							<p className={create.registerError}>{errors.email.message}</p>
						)}
					</div>

					{/* Password */}
					<div className={create.registerGroup}>
						<div className={create.registerBox}>
							<div className={create.registerIcon}>
								<BiLock />
							</div>
							<div className={create.registerField}>
								<input
									id="password"
									type={showPassword ? "text" : "password"}
									placeholder=" "
									spellCheck="false"
									autoComplete="off"
									{...register("password", {
										required: {
											value: true,
											message: "Mật khẩu không được để trống",
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
									className={create.registerShowPass}
									onClick={() => handleShowPass("password")}
								>
									{showPassword ? <RiEye2Line /> : <RiEyeCloseLine />}
								</span>
							</div>
						</div>
						{errors.password && (
							<p className={create.registerError}>{errors.password.message}</p>
						)}
					</div>

					{/* Confirm Password */}
					<div className={create.registerGroup}>
						<div className={create.registerBox}>
							<div className={create.registerIcon}>
								<GiAnticlockwiseRotation />
							</div>
							<div className={create.registerField}>
								<input
									id="confirm-password"
									type={showConfirmPassword ? "text" : "password"}
									placeholder=" "
									spellCheck="false"
									autoComplete="off"
									{...register("confirmPassword", {
										required: {
											value: true,
											message: "Vui lòng xác thực mật khẩu",
										},
										validate: (value) => {
											if (watch("password") !== value) {
												return "Mật khẩu không trùng khớp";
											}
										},
									})}
								/>
								<label htmlFor="confirm-password">Nhập lại mật khẩu</label>
								<span
									className={create.registerShowPass}
									onClick={() => handleShowPass("confirm-password")}
								>
									{showConfirmPassword ? <RiEye2Line /> : <RiEyeCloseLine />}
								</span>
							</div>
						</div>
						{errors.confirmPassword && (
							<p className={create.registerError}>
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					{/* Register */}
					<div className={create.registerButton}>
						<button>Đăng Ký</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Register;
