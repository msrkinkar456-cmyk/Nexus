import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Feature from './Pages/Feature.jsx'
import Capabilities from './Pages/Capabilities.jsx'
import Notfound from './Pages/Notfound.jsx'
import { RouterProvider } from 'react-router'
import Rootfile from './Root/Rootfile.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootfile
  },
  {
    path: "/feature",
    Component: Feature,
  },
  {
    path: "/capabilities",
    Component: Capabilities,
  },
  {
    path: "*",
    Component: <Rootfile page={<Notfound/>}/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} /> 
  </StrictMode>,
)
