import React from "react";
import { useForm } from "react-hook-form";
import { GoMail } from "react-icons/go";
import { ImArrowLeft2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../Slice/authSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import forgot from "./forgot.module.scss";
import { useState } from "react";

const Forgot = () => {
	const [isSuccess, setIsSuccess] = useState(false);
	const { users, user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const userPW = Object.assign({}, ...user);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
		},
		mode: "onSubmit",
	});

	const Modal = withReactContent(Swal);

	const onSubmit = async (values) => {
		const item = users.find((user) => user.email === values.email);

		if (item === undefined) {
			Modal.fire({
				icon: "error",
				title: "Email không tồn tại",
				showConfirmButton: true,
				customClass: { title: "swal2-title-alert" },
			});
			setIsSuccess(false);
			return;
		}

		dispatch(forgotPassword(values.email));
		setIsSuccess(true);
	};

	return (
		<section className={forgot.forgot}>
			<div className={forgot.forgotForm}>
				<div className={forgot.forgotReturn}>
					<Link to={-1}>
						<ImArrowLeft2 />
					</Link>
				</div>

				<div className={forgot.forgotHeader}>
					<img src="./img/logo/logo.png" alt="logo" />
					<h1 className={forgot.forgotTitle}>Xác Thực Tài Khoản</h1>
				</div>

				<form className={forgot.forgotBody} onSubmit={handleSubmit(onSubmit)}>
					<div className={forgot.forgotNote}>
						<p>Vui lòng nhập email của bạn để lấy lại mật khẩu</p>
					</div>

					<div className={forgot.forgotGroup}>
						<div className={forgot.forgotBox}>
							<div className={forgot.forgotIcon}>
								<GoMail />
							</div>
							<div className={forgot.forgotField}>
								<input
									id="email"
									type="email"
									placeholder=" "
									spellCheck="false"
									autoComplete="off"
									{...register("email", {
										required: {
											value: true,
											message: "Vui lòng nhập email",
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
							<p className={forgot.forgotError}>{errors.email.message}</p>
						)}
					</div>

					<div className={forgot.forgotButton}>
						<button>Gửi</button>
					</div>

					<div
						style={{ opacity: isSuccess ? 1 : 0 }}
						className={forgot.forgotSuccess}
					>
						<p className={forgot.forgotAlert}>Xác thực thành công</p>
						<p className={forgot.forgotPass}>
							Mật khẩu của bạn là: <span>{userPW.password}</span>
						</p>
					</div>
				</form>

				<div className={forgot.forgotFooter}>
					<p className={forgot.forgotToRegister}>
						<Link to="/register">Tạo tài khoản mới</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Forgot;
