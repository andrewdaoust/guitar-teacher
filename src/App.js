import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FretboardQuiz } from "./components/fretboard.quiz";
import { IntervalNoteQuiz } from "./components/interval-note.quiz";
import { IntervalSemitoneQuiz } from "./components/interval-semitone.quiz";
import { ScaleQuiz } from "./components/scale.quiz";
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
        path: "interval-note",
        element: <IntervalNoteQuiz />,
      },
      {
        path: "interval-semitone",
        element: <IntervalSemitoneQuiz />,
      },
      {
        path: "scale",
        element: <ScaleQuiz />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
