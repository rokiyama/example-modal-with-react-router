import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './Layout.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './Home.tsx'
import { About } from './About.tsx'
import { Contact } from './Contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
