import axiosClient from "./axiosClient";

const productTypeAPI = {
	getType: () => {
		return axiosClient.get("Types");
	},
};

export default productTypeAPI;
