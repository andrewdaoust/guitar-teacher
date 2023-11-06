import React from "react";
import { useState } from "react";
import * as notes from "../lib/notes.ts";
import "./Quiz.css";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  ButtonGroup,
  Avatar,
  Stack,
  Typography,
  Box
} from "@mui/material";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Button from "@mui/material/Button"; 
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Avatar from "@mui/material/Avatar"; 

const MAX_COUNT = 20;
const MAX_FRETS = 24;

export function Quiz() {
  let [question, setQuestion] = useState(createQuestionData());
  let [progress, setProgress] = useState({
    count: 1,
    score: 0,
  });

  const wrongAnswer = () => {
    setProgress({
      count: progress.count + 1,
      score: progress.score,
    });
    setQuestion(createQuestionData());
  };

  const correctAnswer = () => {
    setProgress({
      count: progress.count + 1,
      score: progress.score + 1,
    });
    setQuestion(createQuestionData());
  };

  const resetGame = () => {
    setProgress({
      count: 1,
      score: 0,
    });
    setQuestion(createQuestionData());
  };

  return progress.count > 20 ? (
    <QuizOver score={progress.score} resetFn={resetGame} />
  ) : (
    <div>
      <QuizStart />
      <Question
        progress={progress}
        question={question}
        onCorrect={correctAnswer}
        onWrong={wrongAnswer}
      />
    </div>
  );
}

// Supporting components
function Question({ progress, question, onCorrect, onWrong }) {
  return (
    // <div className="quiz-game">
    <Box justifyContent="center">
      <Typography variant="h4">
        Question {progress.count}/{MAX_COUNT}
      </Typography>
      <Typography variant="h4">SCORE: {progress.score}</Typography>
      <Stack direction="row" spacing={1}>
        <Typography variant="h5">STRING</Typography>
        <Typography variant="h5">|</Typography>
        <Typography variant="h5">FRET</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar>{question.string}</Avatar>
        <Avatar>{question.fret}</Avatar>
      </Stack>
      {/* <p>
        String: <Avatar>{question.string}</Avatar>
      </p> */}
      {/* <p>Fret: {question.fret}</p> */}
      {/* <button
        className="note-button"
        onClick={question.options[0] === question.note ? onCorrect : onWrong}
      >
        {question.options[0]}
      </button> */}
      <ButtonGroup size="large">
        <QuizButton
          option={question.options[0]}
          note={question.note}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
        <QuizButton
          option={question.options[1]}
          note={question.note}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
        <QuizButton
          option={question.options[2]}
          note={question.note}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
        <QuizButton
          option={question.options[3]}
          note={question.note}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      </ButtonGroup>
      {/* <p>Answer: {question.note}</p> */}
    </Box>
    // </div>
  );
}

function QuizButton({ option, note, onCorrect, onWrong }) {
  return (
    <Button
      // className="note-button"
      onClick={option === note ? onCorrect : onWrong}
    >
      {option}
    </Button>
  );
}

function QuizStart() {
  const [stringState, setStringState] = React.useState({
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStringState({
      ...stringState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked onChange={handleChange} />}
          label="6"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked onChange={handleChange} />}
          label="5"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked onChange={handleChange} />}
          label="4"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked onChange={handleChange} />}
          label="3"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked onChange={handleChange} />}
          label="2"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked onChange={handleChange} />}
          label="1"
        />
      </FormGroup>
    </div>
  );
}

function QuizOver({ score, resetFn }) {
  return (
    <div>
      <p>
        Game over! Score: {score}/{MAX_COUNT}
      </p>
      <button onClick={resetFn}>New Game</button>
    </div>
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
  let note = notes.note(string, fret);
  let options = createAnswers(note);

  return {
    string,
    fret,
    note,
    options,
  };
}
