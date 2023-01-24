import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeType } from "../../../Slice/productTypeSlice";

import buttonType from "./buttonTypeList.module.scss";

const ButtonTypeList = ({ types }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLinkType = (type) => {
		dispatch(changeType(type));
		navigate(`/products/${type}`);
	};

	return (
		<div className={buttonType.buttonType}>
			{types.map((btnType) => {
				return (
					<button
						key={btnType.id}
						className={buttonType.buttonTypeLink}
						onClick={() => handleLinkType(btnType.type)}
					>
						{btnType.name}
					</button>
				);
			})}
		</div>
	);
};

export default ButtonTypeList;
