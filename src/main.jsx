import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./route/Home";
import About from "./route/About";
import Service from "./route/Service";
import Contact from "./route/ContactUs";
import SignUp from "./route/SignUp";
import SignIn from "./route/SignIn";
import CreateAccountForm from "./route/CreateAccountForm";
import LogIn from "./route/Login";
import ForgetPassword from "./route/ForgetPassword";
import EnterOtp from "./route/EnterOtp";
import NewPassword from "./NewPassword";
import Registration from "./route/Registration";
import ArtisanList from "./route/ArtisanList";
import SelectArtisan from "./route/SelectArtisan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/createAccount",
    element: <CreateAccountForm />,
  },

  {
    path: "/login",
    element: <LogIn />,
  },

  {
    path: "/forgetPassword",
    element: <ForgetPassword />,
  },

  {
    path: "/enterOtp",
    element: <EnterOtp />,
  },

  {
    path: "/newPassword",
    element: <NewPassword />,
  },

  {
    path: "/registration",
    element: <Registration />,
  },

  {
    path: "/artisan-list",
    element: <ArtisanList />,
  },

  {
    path: "/select-artisan",
    element: <SelectArtisan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
