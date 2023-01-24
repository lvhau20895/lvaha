import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import system from "./system.module.scss";

const System = ({ children }) => {
	const [showSystem, setShowSystem] = useState(false);

	return (
		<section
			style={{
				transform: showSystem ? "translate(0, -50%)" : "translate(150%, -50%)",
			}}
			className={system.system}
		>
			<div
				style={{
					opacity: showSystem ? "0" : "1",
					pointerEvents: showSystem ? "none" : "unset",
				}}
				className={system.systemShowMenu}
				onClick={() => setShowSystem(true)}
			>
				<BiChevronLeft />
			</div>
			<div
				className={system.systemHideMenu}
				onClick={() => setShowSystem(false)}
			>
				<BiChevronRight />
			</div>
			{children}
		</section>
	);
};

export default System;
