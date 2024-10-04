import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

//router configuration
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./assets/routes/Home.jsx";
import Contracts from "./assets/routes/Contracts.jsx";
import ErrorPage from "./assets/routes/ErrorPage.jsx";
import AvailableCars from "./assets/routes/AvailableCars.jsx";
import Login from "./assets/routes/Login.jsx";
import AvailableCarsClient from "./assets/routes/AvailableCarsClient.jsx";
import ContractsClient from "./assets/routes/ContractsClient.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // error page
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contracts",
        element: <Contracts />,
      },
      {
        path: "/available-cars",
        element: <AvailableCars />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/available-cars-client",
        element: <AvailableCarsClient />,
      },
      {
        path: "/contracts-client",
        element: <ContractsClient />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
