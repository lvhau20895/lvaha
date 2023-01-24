import React, { useState } from "react";
import { useEffect } from "react";

const ProductBrand = ({ products, brand, type }) => {
	// const [productBrand, setProductBrand] = useState(products);
	// console.log(productBrand);

	// useEffect(() => {
	// 	if (brand === type) {
	// 		setProductBrand(products);
	// 		return;
	// 	} else {
	// 		const productBrand = products.filter(
	// 			(item) => item.type === type && item.brand === brand
	// 		);
	// 		setProductBrand(productBrand);
	// 	}
	// }, [brand, products, type]);

	return (
		<div>
			{products.map((item) => (
				<p>{item.name}</p>
			))}
		</div>
	);
};

export default ProductBrand;
