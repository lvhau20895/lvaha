import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import productItem from "./productItem.module.scss";

const ProductItem = ({ item, products }) => {
	const [index, setIndex] = useState(0);

	const handleClickChangeRom = (id, idx) => {
		const index = products.findIndex((item) => item.id === id);
		if (index !== -1) {
			setIndex(idx);
		}
	};

	return (
		<Link
			className={`${productItem.productItem} ${
				productItem[item.type.charAt(0).toUpperCase() + item.type.slice(1)]
			} `}
		>
			{/* Image */}
			<div className={productItem.productItemImage}>
				<img src={item.images[0].url} alt={item.images[0].code} />
			</div>

			{/* Description */}
			<div className={productItem.productItemDescription}>
				{/* Status */}
				<div className={productItem.productItemStatus}>
					{item.hot && <span className={productItem.productItemHot}>Hot</span>}
					{!item.status && (
						<span className={productItem.productItemOutOfStock}>Hết hàng</span>
					)}
				</div>

				{/* Name */}
				<h1 className={productItem.productItemName}>{item.name}</h1>

				{/* Title */}
				<p>{item.title}</p>

				{/* Roms */}
				<div className={productItem.productItemRom}>
					{item.specifications.roms?.length > 1 &&
						item.specifications.roms?.map((rom, idx) => {
							return (
								<button
									key={idx}
									className={index === idx ? productItem.active : ""}
									onClick={() => handleClickChangeRom(item.id, idx)}
								>
									{rom.type}
								</button>
							);
						})}
				</div>

				{/* Price */}
				{!item.specifications.hasOwnProperty("price") ? (
					<span>
						{Number(item.specifications.roms[index].price).toLocaleString()}đ
					</span>
				) : (
					<span>{Number(item.specifications.price).toLocaleString()}đ</span>
				)}
			</div>
		</Link>
	);
};

export default ProductItem;
