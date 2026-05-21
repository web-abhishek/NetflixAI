import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/Login'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import TopRated from '../pages/TopRated'
import Trending from '../pages/Trending'
import Popular from '../pages/Popular'
import Upcoming from '../pages/Upcoming'
import Shows from '../pages/Shows'
import NotFound from '../pages/NotFound'
import ComingSoon from '../components/ComingSoon'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Login /> },
            { path: 'home', element: <Home /> },
            { path: 'movie/:movieId', element: <MovieDetails /> },
            { path: 'top-rated', element: <TopRated /> },
            { path: 'trending', element: <Trending /> },
            { path: 'popular', element: <Popular /> },
            { path: 'upcoming', element: <Upcoming /> },
            { path: 'favourite', element: <ComingSoon /> },
            { path: 'shows', element: <Shows /> },
            { path: '*', element: <NotFound /> },
        ],
    }
])

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
