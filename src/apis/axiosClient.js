import axios from "axios";

const axiosClient = axios.create({
	baseURL: "https://62e49ca8c6b56b451187a62d.mockapi.io/api/",
});

axiosClient.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		return Promise.reject(error.response?.data);
	}
);

export default axiosClient;
