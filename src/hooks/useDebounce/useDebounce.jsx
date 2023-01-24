/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";

const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value]);

	return debounceValue;
};

export default useDebounce;
