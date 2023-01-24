/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonTypeList from "../../components/ProductsComponent/ButtonTypeList";
import ProductsList from "../../components/ProductsComponent/ProductsList";
import { getProducts } from "../../Slice/productSlice";
import { getTypes } from "../../Slice/productTypeSlice";

import product from "./products.module.scss";

const Products = () => {
	const { types } = useSelector((state) => state.type);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getTypes());
	}, []);

	return (
		<section className={product.product}>
			<div className={product.productMain}>
				<ButtonTypeList types={types} />

				<div className={product.productList}>
					{types.map((type) => {
						return (
							<div className={product.productType} key={type.id}>
								<h1 className={product.productTypeTitle}>{type.name}</h1>
								<ProductsList type={type.type} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Products;
