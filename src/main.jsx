import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './Router/Router.jsx';

import {

  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Auth/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />

    </AuthProvider>

  </StrictMode>,
)
