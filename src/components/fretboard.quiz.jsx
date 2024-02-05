import React from "react";
import * as notes from "../lib/notes";
import { Quiz } from "./quiz";

import { Avatar, Stack, Typography, Box, Divider } from "@mui/material";

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
      <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h5">STRING</Typography>
          <Avatar>{question.string}</Avatar>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="h5">FRET</Typography>
          <Avatar>{question.fret}</Avatar>
        </Stack>
      </Stack>
    </Box>
  );
}


// Helper functions
function createAnswers(correctNote) {
  const correctIdx = Math.floor(Math.random() * 4);
  let answers = [];
  for (let i = 0; i < 4; i++) {
    if (i === correctIdx) {
      answers.push(correctNote);
    } else {
      let r = notes.randomNote(answers.concat([correctNote]));
      answers.push(r);
    }
  }
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
