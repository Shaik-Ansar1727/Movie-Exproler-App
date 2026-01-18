import './App.css'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'
import Search from './Pages/Search'
import About from './Pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import NotFound from './Pages/NotFound'




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "movie/:id",
          element: <MovieDetails />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "*",
          element: <NotFound />,
        },


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
