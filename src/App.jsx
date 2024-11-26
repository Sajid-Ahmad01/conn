import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/product"
import Apply from "./components/Apply"
import Footer from "./components2/Footer"
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom'


const Layout = () =>{
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[{path: "/", element: <Home />},
        {path: "/about", element: <About />},
        {path: "/products", element: <Products />},
        {path: "/apply", element: <Apply />}
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App