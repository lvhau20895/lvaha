import axiosClient from "./axiosClient";

const productAPI = {
	getProducts: () => {
		return axiosClient.get("Products");
	},

	getProductsType: (type, brand) => {
		if (brand === type) {
			return axiosClient.get("Products", {
				params: { type: brand },
			});
		}
		return axiosClient.get("Products", {
			params: { brand: brand },
		});
	},

	getProductDetails: (productId) => {
		return axiosClient.get(`Products/${productId}`);
	},

	searchProduct: (search) => {
		return axiosClient.get("Products", {
			params: {
				name: search,
			},
		});
	},
};

export default productAPI;
