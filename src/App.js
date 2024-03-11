import {createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/products" element={<ProductPage/>} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinition);
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {path: '/', element: <HomePage/> },
      {path: '/products', element: <ProductPage/> }
    ]
  }
])
function App() {
  return <RouterProvider  router={router}/>;
}

export default App;
