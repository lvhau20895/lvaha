import axiosClient from "./axiosClient";

const authAPI = {
	getUsers: () => {
		return axiosClient.get("Users");
	},

	register: (token, values) => {
		return axiosClient.post("Users", {
			...values,
			type: "guest",
			image: "",
			token,
		});
	},

	login: (token) => {
		return axiosClient.get("Users", {
			params: { token: token },
		});
	},

	forgot: (email) => {
		return axiosClient.get("Users", {
			params: { email: email },
		});
	},
};

export default authAPI;
