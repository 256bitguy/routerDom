import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import Root, {loader as rootLoader, action as rootAction} from './routes/Root'
import ErrorPage from './error-page'
import Contact,{loader as contactLoader} from './routes/Contact';
import EditContact,{action as editAction} from './routes/Edit'
import { action as destroyAction } from "./routes/Destroy";

const router=createBrowserRouter([
  {path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    loader:rootLoader,
    action:rootAction,
    children:[
      {
        path : "contacts/:contactId",
        loader: contactLoader,
        element : <Contact/>
      },
      {
        path : "contacts/:contactId/edit",
        loader: contactLoader,
        element : <EditContact/>,
         action: editAction
      },
      {
        path : "contacts/:contactId/destroy",
        
         action: destroyAction,
         errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

