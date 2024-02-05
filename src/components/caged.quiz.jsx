import React from "react";
import * as caged from "../lib/caged";
import * as notes from "../lib/notes"
import { Quiz } from "./quiz";

import { Stack, Typography, Box } from "@mui/material";

const MAX_COUNT = 20;
const MAX_FRETS = 12;

export function CagedQuiz() {
  return (
    <Quiz
      maxQuestions={MAX_COUNT}
      questionLayout={Layout}
      questionDataFunc={createQuestionData}
    />
  );
}

function Layout({ question }) {
  let position;
  if (question.position === 0) {
    position = "Open position";
  } else if (question.position === 1) {
    position = "1st position";
  } else if (question.position === 2) {
    position = "2nd position";
  } else if (question.position === 3) {
    position = "3rd position";
  } else {
    position = `${question.position}th position`;
  }

  let form = `${question.form} form`
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Typography variant="h5">{form}</Typography>
        <Typography variant="h5">{position}</Typography>
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
  let form = caged.getRandomForm([]);
  let position = Math.floor(Math.random() * MAX_FRETS);
  let correct = caged.getChordFromForm(form, position);
  let options = createAnswers(correct);

  return {
    form,
    position,
    correct,
    options,
  };
}
