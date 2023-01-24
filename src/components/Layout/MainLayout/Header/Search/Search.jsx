/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import { GoSearch } from "react-icons/go";
import { useEffect, useState, useRef } from "react";
import useDebounce from "../../../../../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	resetSearchResult,
	searchProduct,
} from "../../../../../modules/Products/Slice/productSlice";
import useCheckedOutside from "../../../../../hooks/useCheckedOutside";

import search from "./search.module.scss";

const Search = () => {
	const [searchValue, setSearchValue] = useState("");
	const [showResult, setShowResult] = useState(true);

	const searchRef = useRef();
	const inputRef = useRef();

	const { searchResult, loadingSearch } = useSelector((state) => state.product);

	const debounce = useDebounce(searchValue, 500);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useCheckedOutside(searchRef, () => setShowResult(false));

	useEffect(() => {
		if (!debounce.trim()) return;

		dispatch(searchProduct(debounce));
	}, [debounce]);

	const handleChange = (e) => {
		const { value } = e.target;

		if (!value.startsWith(" ")) {
			setSearchValue(value);
		}
		if (!value) {
			dispatch(resetSearchResult());
		}
	};

	const handleClearSearchValue = () => {
		setSearchValue("");
		dispatch(resetSearchResult());
		inputRef.current.focus();
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(searchValue);
	};

	return (
		<section ref={searchRef} className={search.search}>
			<form onSubmit={handleSubmit}>
				<input
					ref={inputRef}
					type="text"
					value={searchValue}
					placeholder="Tìm sản phẩm"
					spellCheck="false"
					onChange={handleChange}
					onFocus={() => setShowResult(true)}
				/>
				{loadingSearch && (
					<span className={search.searchLoading}>
						<ImSpinner9 />
					</span>
				)}
				{!loadingSearch && searchValue && (
					<button
						className={search.searchClear}
						onClick={handleClearSearchValue}
					>
						<MdOutlineClose />
					</button>
				)}
				<button
					className={search.searchButton}
					onMouseDown={(e) => e.preventDefault()}
				>
					<GoSearch />
				</button>
			</form>

			{showResult && searchResult.length > 0 && (
				<div
					style={{ overflowY: searchResult.length < 5 ? "hidden" : "scroll" }}
					className={search.searchResult}
				>
					{searchResult.map((product) => {
						return (
							<div key={product.id} className={search.searchItem}>
								<div className={search.searchItemImage}>
									<img
										src={product.images[0].url}
										alt={product.images[0].code}
									/>
								</div>
								<div className={search.searchItemTitle}>
									<h1>{product.name}</h1>
									<p>{product.title}</p>
									{product.type === "watch" ||
									product.type === "headphone" ||
									product.type === "speaker" ? (
										<span>
											{Number(product.specifications.price).toLocaleString()}đ
										</span>
									) : (
										<span>
											{Number(
												product.specifications.roms[0].price
											).toLocaleString()}
											đ
										</span>
									)}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default Search;
