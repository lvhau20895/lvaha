import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Layout/AdminLayout";
import AuthLayout from "./components/Layout/AuthLayout";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import Forgot from "./modules/Authentication/page/Forgot";
import Login from "./modules/Authentication/page/Login";
import Register from "./modules/Authentication/page/Register";
import Home from "./modules/Home/page/Home";
import Products from "./modules/Products/page/Products";
import ProductType from "./modules/Products/page/ProductType";
import CheckoutRoute from "./routes/CheckoutRoute";

// const Home = lazy(() => import("./modules/Home/page/Home"));

function App() {
	return (
		<Suspense fallback={<h1>Loading</h1>}>
			<Routes>
				<Route element={<CheckoutRoute />}>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/products/:type" element={<ProductType />} />
					</Route>
				</Route>

				<Route path="/" element={<AuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgot" element={<Forgot />} />
				</Route>

				<Route path="/admin" element={<AdminLayout />}>
					<Route />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
