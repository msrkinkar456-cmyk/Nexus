import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Rootfile from './Root.jsx/Rootfile.jsx'
import Feature from './Pages/Feature.jsx'
import Capabilities from './Pages/Capabilities.jsx'
import Notfound from './Pages/Notfound.jsx'
import { RouterProvider } from 'react-router'


const router = createBrowserRouter([
  {
    path: "/",
    element: Rootfile,
  },
  {
    path: "/feature",
    element: Feature,
  },
  {
    path: "/capabilities",
    element: Capabilities,
  },
  {
    path: "*",
    element: <Rootfile page={<Notfound/>}/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} /> 
  </StrictMode>,
)
