import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import { Provider } from "react-redux";
import store from "./store";
import CreateProductPage from "./pages/CreateProductPage";
import { action as createProductAction } from "./features/products/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductListPage />,
  },
  {
    path: "/product/new",
    element: <CreateProductPage />,
    action: createProductAction,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
