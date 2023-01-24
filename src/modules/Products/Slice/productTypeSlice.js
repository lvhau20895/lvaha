import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productTypeAPI from "../../../apis/productTypeAPI";

const initialState = {
	types: [],
	brand: JSON.parse(localStorage.getItem("type")),
	loading: false,
	error: null,
};

export const getTypes = createAsyncThunk(
	"type/getTypes",
	async (_, { rejectWithValue }) => {
		try {
			const data = await productTypeAPI.getType();
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const productTypeSlice = createSlice({
	name: "type",
	initialState,
	reducers: {
		changeType: (state, { payload }) => {
			localStorage.setItem("type", JSON.stringify(payload));
			state.brand = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getTypes.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getTypes.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.types = payload;
		});
		builder.addCase(getTypes.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		});
	},
});

export const { changeType } = productTypeSlice.actions;
export default productTypeSlice.reducer;
