import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Blog } from './pages/Blog'
import { Posts } from './pages/Posts'
import { App } from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
      {
        path: '/posts/:postId',
        element: <Posts />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)
