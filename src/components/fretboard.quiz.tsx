import React from "react";
import * as notes from "../lib/notes.ts";
import { Quiz } from "./quiz.tsx";

import { Avatar, Stack, Typography, Box } from "@mui/material";

const MAX_COUNT = 20;
const MAX_FRETS = 12;

export function FretboardQuiz() {
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
        <Typography variant="h5">STRING</Typography>
        <Typography variant="h5">|</Typography>
        <Typography variant="h5">FRET</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar>{question.string}</Avatar>
        <Avatar>{question.fret}</Avatar>
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
  let string = notes.randomString();
  let fret = notes.randomFret(MAX_FRETS);
  let correct = notes.note(string, fret);
  let options = createAnswers(correct);

  return {
    string,
    fret,
    correct,
    options,
  };
}
