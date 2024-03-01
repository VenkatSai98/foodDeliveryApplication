import React, { lazy, useContext, useEffect, useState, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuDetails from "./components/RestaurantMenuDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { userPersonalDetails } from "./utils/userPersonalDetails";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

let Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    let data = {
      name: "updated Name",
    };
    setUserInfo(data?.name);
  }, []);
  return (
    <Provider store={appStore}>
      {/* // <userPersonalDetails.Provider value={{ userName: userInfo, setUserInfo }}> */}

      <div className="app-layout">
        <Header />
        <Outlet />
      </div>

      {/* // </userPersonalDetails.Provider> */}
    </Provider>
  );
};

let routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:userId",
        element: <RestaurantMenuDetails />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback="loading"><Grocery /></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
]);

let rootElement = ReactDOM.createRoot(document.getElementById("rootElement"));
rootElement.render(<RouterProvider router={routing} />);
