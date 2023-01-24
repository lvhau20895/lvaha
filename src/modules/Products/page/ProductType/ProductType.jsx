/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Brand from "../../components/ProductTypeComponent/Brand";
import ProductBrand from "../../components/ProductTypeComponent/ProductBrand";
import { getProducts, getProductsType } from "../../Slice/productSlice";
import { getTypes } from "../../Slice/productTypeSlice";

import productType from "./productType.module.scss";

const ProductType = () => {
	const { types, brand } = useSelector((state) => state.type);
	const { productsType, products } = useSelector((state) => state.product);
	const { type } = useParams();
	const dispatch = useDispatch();

	const brandBtn = types.find((item) => item.type === type);
	// const arrProduct = products.filter((item) => item.type === type);
	useEffect(() => {
		dispatch(getProductsType({ type, brand }));
		// dispatch(getProducts());
		dispatch(getTypes());
	}, [brand]);

	return (
		<section className={productType.productType}>
			<div className={productType.productTypeMain}>
				<Brand type={type} brandBtn={brandBtn} brand={brand} />
				<ProductBrand products={productsType} brand={brand} type={type} />
			</div>
		</section>
	);
};

export default ProductType;
