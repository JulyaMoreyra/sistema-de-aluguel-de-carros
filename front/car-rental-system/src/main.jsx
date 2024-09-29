import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//router configuration
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./assets/routes/Home.jsx";
import Contact from "./assets/routes/Contact.jsx";
import ErrorPage from "./assets/routes/ErrorPage.jsx";
import ContactDetails from "./assets/routes/ContactDetails.jsx";

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
        path: "/contact",
        element: <Contact />,
      },
			//nested routes - unique identifier
			{
				path: "/contact/:id",
				element: <ContactDetails />,
			}

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
