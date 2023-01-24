import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../../apis/authAPI";

const initialState = {
	users: [],
	user: [],
	loading: false,
	error: null,
	token: JSON.parse(localStorage.getItem("token")) || null,
};

// Get Users List
export const getUsers = createAsyncThunk(
	"auth/getUsers",
	async (_, { rejectWithValue }) => {
		try {
			const data = await authAPI.getUsers();
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

// Register
export const createAccount = createAsyncThunk(
	"auth/register",
	async ({ token, values }, { rejectWithValue }) => {
		try {
			await authAPI.register(token, values);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

// Login
export const signIn = createAsyncThunk(
	"auth/login",
	async (token, { rejectWithValue }) => {
		try {
			const data = await authAPI.login(token);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

// Forgot
export const forgotPassword = createAsyncThunk(
	"auth/forgot",
	async (email, { rejectWithValue }) => {
		try {
			const data = await authAPI.forgot(email);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken: (state, { payload }) => {
			localStorage.setItem("token", JSON.stringify(payload));
			state.token = payload;
		},

		logout: (state) => {
			localStorage.removeItem("token");
			state.token = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUsers.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getUsers.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.users = payload;
		});
		builder.addCase(getUsers.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		});

		builder.addCase(signIn.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(signIn.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		});
		builder.addCase(signIn.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		});

		builder.addCase(forgotPassword.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(forgotPassword.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		});
		builder.addCase(forgotPassword.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		});
	},
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
