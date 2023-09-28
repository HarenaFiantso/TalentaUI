import Home from "./pages/homePage/Home";
import Gigs from "./pages/gigsPage/Gigs";
import Gig from "./pages/gigPage/Gig";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import Add from "./pages/addPage/Add";
import Orders from "./pages/ordersPage/Orders";
import Messages from "./pages/messagesPage/Messages";
import Message from "./pages/messagePage/Message";
import MyGigs from "./pages/myGigsPage/MyGigs";
import Pay from "./pages/payPage/Pay";
import Success from "./pages/successPage/Success";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  /* Creating a layout model for all pages */
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  /* Managing routes */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
