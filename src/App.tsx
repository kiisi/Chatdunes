import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
]);

export default function App(){
  return <RouterProvider router={router} />
}