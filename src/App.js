
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Home from "./pages/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
   {
    path: "/products/:id",
    element: <Products/>
  },
    {
    path: "/product/:id",
    element:<Product/>
  },
]);
const App = () => {
  return (
    <div><RouterProvider router={router} /></div>
  )
}

export default App