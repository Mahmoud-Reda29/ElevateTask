
// import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Categories from './Components/Categories/Categories';
import NotFound from './Components/NotFound/NotFound';

const client = new QueryClient();

function App() {
const router = createHashRouter([{
  path:"",
  element: <LayOut />,
  children: [
    { index: true, element: <Home/> },
    {path: "products" , element: <Products />},
    {path: "productDetails/:id", element: <ProductDetails />},
    {path: "categories" , element : <Categories />},
    {path: "*", element: <NotFound />},
  ]
}])
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default App
