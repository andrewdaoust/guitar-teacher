import React from "react";
import * as notes from "../lib/notes.ts";
import * as scales from "../lib/scales.ts"
import { Quiz } from "./quiz.tsx"

import {
  Stack,
  Typography,
  Box,
} from "@mui/material";

const MAX_COUNT = 20;

export function IntervalQuiz() {
  return (
    <Quiz
      maxQuestions={MAX_COUNT}
      questionLayout={Layout}
      questionDataFunc={createQuestionData}
    />
  );
}


function Layout({ question }) {
  return (
    <Box>
      <Stack direction="row" spacing={1}>
        <Typography variant="h5">Root note</Typography>
        <Typography variant="h5">|</Typography>
        <Typography variant="h5">Interval</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="h6">{question.rootNote}</Typography>
        <Typography variant="h6">-</Typography>
        <Typography variant="h6">{question.interval.intervalName}</Typography>
      </Stack>
    </Box>
  );
}


// Helper functions
function createAnswers(correctNote: string): string[] {
  const correctIdx = Math.floor(Math.random() * 4);
  let answers: string[] = [];
  for (let i = 0; i < 4; i++) {
    if (i === correctIdx) {
      answers.push(correctNote);
    } else {
      let r = notes.randomNote(answers.concat([correctNote]));
      answers.push(r);
    }
  }

  // console.log(answers);
  return answers;
}

function createQuestionData() {
  let rootNote = notes.randomNote(null);
  let interval = scales.getRandomInterval();
  let correct = scales.getIntervalNote(rootNote, interval.semitones);
  let options = createAnswers(correct);

  return {
    rootNote,
    interval,
    correct,
    options
  };
}
