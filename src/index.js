import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Courses from "./Components/Pages/Courses";
import OurInstructors from "./Components/Pages/OurInstructors";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import SignUp from "./Components/SignAndLog/SignUp";
import LogIn from "./Components/SignAndLog/LogIn";
import Profile from "./Components/SignAndLog/Profile";

const router = createBrowserRouter([
    {
        path: "/", element: <App />
    },
    {
        path: "/courses", element: <Courses />
    },
    {
        path: "/instructors", element: <OurInstructors />
    },
    {
        path: "/Contact", element: <Contact />
    },
    {
        path: "/about", element: <About />
    },
    {
        path: "/signup", element: <SignUp />
    },
    {
        path: "/login", element: <LogIn />
    },
    {
        path: "/profile", element: <Profile />
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);