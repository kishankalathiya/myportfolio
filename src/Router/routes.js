import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import DefaultLayout from "../DefaultLayout/defaultLayout";
import AboutMe from "../Components/AboutMe/AboutMe";
import Portfolio from "../Components/Portfolio/Portfolio";
import Resume from "../Components/Resume/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/aboutMe",
    element: (
      <DefaultLayout>
        <AboutMe />
      </DefaultLayout>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <DefaultLayout>
        <Portfolio />
      </DefaultLayout>
    ),
  },
  {
    path: "/resume",
    element: (
      <DefaultLayout>
        <Resume />
      </DefaultLayout>
    ),
  }
]);

export default router;
