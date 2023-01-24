import { useEffect } from "react";

const useCheckedOutside = (ref, handler) => {
	useEffect(() => {
		const checkedOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				handler();
			}
		};
		document.addEventListener("mousedown", checkedOutside);
		document.addEventListener("touchstart", checkedOutside);

		return () => {
			document.removeEventListener("mousedown", checkedOutside);
			document.removeEventListener("touchstart", checkedOutside);
		};
	}, [ref, handler]);
};

export default useCheckedOutside;
