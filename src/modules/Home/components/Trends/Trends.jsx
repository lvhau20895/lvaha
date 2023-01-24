import React from "react";

import trend from "./trends.module.scss";

const Trends = () => {
	return (
		<section className={trend.trend}>
			<div className={trend.trendTitle}>
				<h1>Dịch Vụ Tiện Ích</h1>
			</div>

			<div className={trend.trendList}>
				{/* Mobile */}
				<div className={trend.trendItem}>
					<div className={trend.trendImage}>
						<img src="./img/background/bg-coming.jpg" alt="mobile" />
					</div>
					<h1>Hàng Sắp Về</h1>
				</div>

				{/* Laptop */}
				<div className={trend.trendItem}>
					<div className={trend.trendImage}>
						<img src="./img/background/bg-repurchase.jpg" alt="laptop" />
					</div>
					<h1>Thu Cũ Đổi Mới</h1>
				</div>

				{/* Tablet */}
				<div className={trend.trendItem}>
					<div className={trend.trendImage}>
						<img src="./img/background/bg-freeship.jpg" alt="tablet" />
					</div>
					<h1>Miễn Phí Giao Hàng</h1>
				</div>
			</div>
		</section>
	);
};

export default Trends;
