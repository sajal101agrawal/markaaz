import React from 'react'
import Login from './components/Login/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DataStewardship from './components/Other/DataStewardship'
import Layout from './components/Layout/Layout'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
   element: <Layout />,
   children: [
    {
      path: "/data-stewardship",
      element: <DataStewardship />
    }
   ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App