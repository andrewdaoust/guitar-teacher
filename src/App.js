import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FretboardQuiz } from "./components/fretboard.quiz";
import { IntervalQuiz } from "./components/interval.quiz";
// import { ScaleReference } from "./components/Scale";

import { Root } from "./components/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "fretboard",
        element: <FretboardQuiz />,
      },
      {
        path: "interval",
        element: <IntervalQuiz />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
