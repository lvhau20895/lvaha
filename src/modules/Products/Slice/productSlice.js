import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPI from "../../../apis/productAPI";

const initialState = {
	products: [],
	productsType: [],
	product: {},
	searchResult: [],
	loadingSearch: false,
	loading: false,
	error: null,
};

const getData = (builder, data, nameAPI) => {
	builder.addCase(nameAPI.pending, (state) => {
		state.loading = true;
	});
	builder.addCase(nameAPI.fulfilled, (state, { payload }) => {
		state.loading = false;
		state[data] = payload;
	});
	builder.addCase(nameAPI.rejected, (state, { payload }) => {
		state.loading = false;
		state.error = payload;
	});
};

export const getProducts = createAsyncThunk(
	"product/getProducts",
	async (_, { rejectWithValue }) => {
		try {
			const data = await productAPI.getProducts();
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const getProductsType = createAsyncThunk(
	"product/getProductsType",
	async ({ type, brand }, { rejectWithValue }) => {
		try {
			const data = await productAPI.getProductsType(type, brand);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const getProductDetails = createAsyncThunk(
	"product/getProductDetails",
	async (productId, { rejectWithValue }) => {
		try {
			const data = await productAPI.getProductDetails(productId);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const searchProduct = createAsyncThunk(
	"product/searchProduct",
	async (search, { rejectWithValue }) => {
		try {
			const data = await productAPI.searchProduct(search);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		resetSearchResult: (state) => {
			state.searchResult = [];
		},
	},
	extraReducers: (builder) => {
		getData(builder, "products", getProducts);
		getData(builder, "productsType", getProductsType);
		getData(builder, "product", getProductDetails);
		getData(builder, "searchResult", searchProduct);

		// builder.addCase(getProducts.pending, (state) => {
		// 	state.loading = true;
		// });
		// builder.addCase(getProducts.fulfilled, (state, { payload }) => {
		// 	state.loading = false;
		// 	state.products = payload;
		// });
		// builder.addCase(getProducts.rejected, (state, { payload }) => {
		// 	state.loading = false;
		// 	state.error = payload;
		// });

		// builder.addCase(getProductsType.pending, (state) => {
		// 	state.loading = true;
		// });
		// builder.addCase(getProductsType.fulfilled, (state, { payload }) => {
		// 	state.loading = false;
		// 	state.productsType = payload;
		// });
		// builder.addCase(getProductsType.rejected, (state, { payload }) => {
		// 	state.loading = false;
		// 	state.error = payload;
		// });

		// builder.addCase(getProductDetails.pending, (state) => {
		// 	state.loading = true;
		// });
		// builder.addCase(getProductDetails.fulfilled, (state, { payload }) => {
		// 	state.loading = false;
		// 	state.product = payload;
		// });
		// builder.addCase(getProductDetails.rejected, (state, { payload }) => {
		// 	state.loading = false;
		// 	state.error = payload;
		// });

		// builder.addCase(searchProduct.pending, (state) => {
		// 	state.loadingSearch = true;
		// });
		// builder.addCase(searchProduct.fulfilled, (state, { payload }) => {
		// 	state.loadingSearch = false;
		// 	state.searchResult = payload;
		// });
		// builder.addCase(searchProduct.rejected, (state, { payload }) => {
		// 	state.loadingSearch = false;
		// 	state.error = payload;
		// });
	},
});

export const { resetSearchResult } = productSlice.actions;
export default productSlice.reducer;
