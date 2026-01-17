import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'
import Search from './Pages/Search'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/moviedetails",
      element: <MovieDetails/>
    },
    {
       path:"/search",
      element: <Search/>
    }
  ])

  return (
    <>
    
       <RouterProvider router={router} />
      
    </>
  )
}

export default App
