import React from "react";
// import { Autoplay, Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

import "./banner.scss";

// const images = [
// 	{ id: 1, image: "./img/background/phone.png" },
// 	{ id: 2, image: "./img/background/ipad.png" },
// 	{ id: 3, image: "./img/background/laptop.png" },
// ];

const Banner = () => {
	return (
		<section className="banner">
			{/* Title */}
			<div className="banner-title">
				<h1>MUA SẮM THẢ GA VỚI ƯU ĐÃI LÊN ĐẾN 100%</h1>
				<p>
					Chuyên cung cấp các mặt hàng điện thoại, laptop, máy tính bảng...và
					các thiết bị điện tử mới nhất
				</p>
				<button>Shopping Nào</button>
			</div>

			{/* Slide */}
			{/* <div className="banner-slide">
				<div className="banner-background">
					<div className="banner-image">
						<Swiper
							slidesPerView={1}
							spaceBetween={20}
							loop={true}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
							}}
							navigation={false}
							pagination={false}
							modules={[Pagination, Navigation, Autoplay]}
							className="mySwiper"
						>
							{images.map((item) => {
								return (
									<SwiperSlide key={item.id}>
										<img src={item.image} alt="phone" />
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
			</div> */}
		</section>
	);
};

export default Banner;
