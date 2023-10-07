import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import AddProduct from "../pages/AddProduct";
import ProductList from "../pages/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        element: <ProductList />,
        index: true,
      },
      {
        element: <AddProduct />,
        path: "addproduct",
      },
    ],
  },
]);
