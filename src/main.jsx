import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign_in from "./auth/sign-in/Sign_in.jsx";
import HomePage from "./home/HomePage";
import DashBoard from "./dashboard/DashBoard.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Sign_up from "./auth/sign-up/Sign_up.jsx";
import Edit from "./resume/edit_page/Edit.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/Dashboard",
        element: <DashBoard />,
      },
      {
        path: "/Edit",
        element: <Edit />,
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Sign-in",
    element: <Sign_in />,
  },
  {
    path: "/Auth/Sign-up",
    element: <Sign_up />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
