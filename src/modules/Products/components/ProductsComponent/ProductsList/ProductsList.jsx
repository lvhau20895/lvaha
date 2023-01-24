import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductItem from "../ProductItem";

import "swiper/css";
import "swiper/css/navigation";

const ProductList = ({ type }) => {
	const { products } = useSelector((state) => state.product);

	const productType = products.filter((item) => item.type === type).reverse();

	return (
		<section>
			<Swiper
				slidesPerView={4}
				spaceBetween={0}
				slidesPerGroup={1}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				{productType?.map((item) => {
					return (
						<SwiperSlide key={item.id}>
							<ProductItem item={item} products={productType} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default ProductList;
