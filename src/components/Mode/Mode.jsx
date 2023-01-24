import Tippy from "@tippyjs/react";
import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Mode = ({ place }) => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("theme"))
	);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");
			document.body.classList.remove("light");
		} else {
			document.body.classList.add("light");
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	const toggleDarkMode = (checked) => {
		localStorage.setItem("theme", JSON.stringify(checked));
		setDarkMode(checked);
	};

	return (
		<Tippy
			content={<p>{darkMode ? "Sáng" : "Tối"}</p>}
			animation="scale"
			theme="theme"
			placement={place}
		>
			<div style={{ display: "inline-block" }}>
				<DarkModeSwitch
					checked={darkMode}
					onChange={toggleDarkMode}
					size={30}
					moonColor="yellow"
					sunColor="orange"
				/>
			</div>
		</Tippy>
	);
};

export default Mode;
