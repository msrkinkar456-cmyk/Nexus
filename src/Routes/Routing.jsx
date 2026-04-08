import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from "../Pages/Hero";
import Rootfile from '../Root.jsx/Rootfile';
import Feature from "../Pages/Feature";
import Capabilities from "../Pages/Capabilities";
import Notfound from '../Pages/Notfound';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootfile,
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
    element: <Rootfile page={<Notfound />} />
  }
]);

const Routing = () => {
  return <RouterProvider router={router} />
}

export default Routing;