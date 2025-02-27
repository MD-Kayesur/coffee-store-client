import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './assets/components/AddCoffee';
import UpdateCoffee from './assets/components/updateCoffee';
import Coffees from './assets/components/coffees';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>, 
    children:[
      {
        path:'/addcoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'/coffee',
        element:<Coffees></Coffees>,
        loader: ()=> fetch('http://localhost:3000/coffee'),
      },
      {
        path:'/updatecoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=> fetch(`http://localhost:3000/coffee/${params.id}`)
      }
    ]
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
