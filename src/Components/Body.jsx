import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import MovieDetails from './MovieDetails'
import Shows from './Shows'
const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/movie/:movieId',
      element: <MovieDetails />
    },
    {
      path: 'shows',
      element: <Shows/>
    }
  ]
)

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;