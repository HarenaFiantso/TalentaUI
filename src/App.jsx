import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homePage/Home";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet/>
        <Footer />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
