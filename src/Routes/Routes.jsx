import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import Register from './../pages/Register/Register';
import Login from './../pages/Login/Login';
import About from './../pages/About/About';
import PrivateRoute from './PrivateRoute';
import Dashboard from './../pages/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutUs",
          element: <About />,
        },
        
        
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },

        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        
      ],
    },
      
    
    ]);
    export default router;