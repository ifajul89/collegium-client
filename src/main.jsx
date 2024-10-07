import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import Home from "./pages/Home/Home/Home.jsx";
import Colleges from "./pages/Colleges/Colleges.jsx";
import CollegePage from "./components/Shared/CollegePage/CollegePage.jsx";
import Admission from "./pages/Admission/Admission.jsx";
import Login from "./pages/Authentication/Login/Login.jsx";
import Register from "./pages/Authentication/Register/Register.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/colleges/:id",
        element: <CollegePage></CollegePage>,
        loader: ({ params }) =>
          fetch(`https://collegium-server.vercel.app/colleges/${params.id}`),
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission></Admission>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
