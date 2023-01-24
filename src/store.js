import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./modules/Authentication/Slice/authSlice";
import productSlice from "./modules/Products/Slice/productSlice";
import productTypeSlice from "./modules/Products/Slice/productTypeSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		type: productTypeSlice,
		product: productSlice,
	},
});

export default store;
