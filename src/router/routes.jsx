import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../components/Error";
import ProductDetail from "../components/ProductDetail";
import ProductsList from "../components/ProductsList";
import Login from "../components/Login";
import RegisterForm from "../components/RegisterForm";
import Home from "../components/Home";

export const router = createBrowserRouter([
    {path: "/", element: <Root />, errorElement: <Error /> , children: [
        {path: "/", element: <Home />},
        {path: "/products", element: <ProductsList />},
        {path: "/products/:productId", element: <ProductDetail />},
        {path: "/login", element: <Login />},
        {path: "/register", element: <RegisterForm />}
    ]},
    
])