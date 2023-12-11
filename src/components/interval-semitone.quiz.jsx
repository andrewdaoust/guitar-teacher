import React from "react";
import * as scales from "../lib/scales"
import { Quiz } from "./quiz"

import {
  Stack,
  Typography,
  Box,
} from "@mui/material";

const MAX_COUNT = 20;

export function IntervalSemitoneQuiz() {
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
      <Stack direction="row" spacing={2}>
        <Typography variant="h6">{question.interval.intervalName}</Typography>
      </Stack>
    </Box>
  );
}


// Helper functions
function createAnswers(correctSemitones) {
  const correctIdx = Math.floor(Math.random() * 4);
  let answers = [];
  for (let i = 0; i < 4; i++) {
    if (i === correctIdx) {
      answers.push(correctSemitones);
    } else {
      let r = scales.getRandomSemitoneInterval(answers.concat([correctSemitones]));
      answers.push(r);
    }
  }

  // console.log(answers);
  return answers;
}

function createQuestionData() {
  let interval = scales.getRandomInterval();
  let correct = interval.semitones;
  let options = createAnswers(correct);

  return {
    interval,
    correct,
    options
  };
}
