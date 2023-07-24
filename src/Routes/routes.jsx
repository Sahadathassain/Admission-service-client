import { createBrowserRouter }
  from "react-router-dom";
import Main from "../Loyout/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Sign up/Signup";
import Login from "../Pages/Login/Login";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },

      {
        path: '/register',
        element: <SignUp></SignUp>
      }
    ]
  }

]);
export default router;