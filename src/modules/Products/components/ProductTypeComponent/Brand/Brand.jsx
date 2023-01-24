import React from "react";
import { useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changeType } from "../../../Slice/productTypeSlice";

import brandButton from "./brandButton.module.scss";

const Brand = ({ type, brandBtn, brand }) => {
	const [active, setActive] = useState(brand);

	const dispatch = useDispatch();

	const handleClick = (value) => {
		dispatch(changeType(value));
		setActive(value);
	};

	return (
		<section className={brandButton.brandButton}>
			<button
				className={`${brandButton.brandButtonAll} ${
					active === type ? brandButton.active : ""
				}`}
				onClick={() => handleClick(type)}
			>
				<FaRegListAlt />
			</button>
			{brandBtn?.brands.map((item, index) => {
				return (
					<button
						className={active === item.brand ? brandButton.active : ""}
						style={{
							color: active === item.brand ? item.color : "#fff",
							border: `3px solid ${item.color}`,
							background: active === item.brand ? "" : item.color,
						}}
						key={index}
						onClick={() => handleClick(item.brand)}
					>
						{item.brand.split(" ")[0]}
					</button>
				);
			})}
		</section>
	);
};

export default Brand;
