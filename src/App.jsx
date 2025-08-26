import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Layout from "./Components/Layout"
import ProductDetails from "./Pages/ProductDetails"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<Layout/>}>
    <Route index element = {<Home/>}></Route>
    <Route path ="/Shop" element= {<Shop/>}></Route>
    <Route path ="/Shop/:id" element= {<ProductDetails/>}></Route>
  </Route>
))
function App() {
 
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
