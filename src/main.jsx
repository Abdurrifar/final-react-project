import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './routers/Router.jsx'

import { RouterProvider } from "react-router";
import Router from './routers/Router.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={Router} />

  </StrictMode>,
)
