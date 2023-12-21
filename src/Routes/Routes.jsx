import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";

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
        // {
        //   path: "/aboutUs",
        //   element: <AboutUs />,
        // },
        
        
        // {
        //   path: "/login",
        //   element: <Login></Login>,
        // },
        // {
        //   path: "/register",
        //   element: <Register></Register>
        // },
        // {
        //   path: "/addArticle",
        //   element: <PrivateRoute><AddArticles></AddArticles></PrivateRoute>
        // },
        
        // {
        //   path: "/UpdateArticle/:id",
        //   element: <PrivateRoute><UpdateArticle></UpdateArticle></PrivateRoute>
        // },
        // {
        //   path: "/profile",
        //   element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        // },
        
        
      ],
    },
      
    
    ]);
    export default router;