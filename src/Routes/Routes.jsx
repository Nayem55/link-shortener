import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Feature from "../Pages/Feature.jsx";
import Contact from "../Pages/Contact.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/features",
        element: <Feature></Feature>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },

]);

export default router;