import React from "react";
import { useState } from "react";

import {
  Button,
  ButtonGroup,
  Typography,
  Box,
} from "@mui/material";


export function Quiz({ maxQuestions, questionLayout, questionDataFunc }) {
  let [question, setQuestion] = useState(questionDataFunc());
  let [progress, setProgress] = useState({
    count: 1,
    score: 0,
    max: maxQuestions,
  });

  const wrongAnswer = () => {
    setProgress({
      count: progress.count + 1,
      score: progress.score,
      max: maxQuestions,
    });
    setQuestion(questionDataFunc());
  };

  const correctAnswer = () => {
    setProgress({
      count: progress.count + 1,
      score: progress.score + 1,
      max: maxQuestions,
    });
    setQuestion(questionDataFunc());
  };

  const resetGame = () => {
    setProgress({
      count: 1,
      score: 0,
      max: maxQuestions,
    });
    setQuestion(questionDataFunc());
  };

  return progress.count > progress.max ? (
    <QuizOver 
      score={progress.score} 
      maxScore={progress.max} 
      resetFn={resetGame} 
    />
  ) : (
    <Box>
      {/* <QuizStart /> */}
      <Question
        progress={progress}
        question={question}
        Layout={questionLayout}
        onCorrect={correctAnswer}
        onWrong={wrongAnswer}
      />
    </Box>
  );
}

// Supporting components
function Question({ progress, question, Layout, onCorrect, onWrong }) {
  return (
    <Box justifyContent="center">
      <Typography variant="h4">
        Question {progress.count}/{progress.max}
      </Typography>
      <Typography variant="h4">Score: {progress.score}</Typography>
      <Layout question={question} />
      <ButtonGroup size="large" sx={{ my: 2 }}>
        <QuizButton
          option={question.options[0]}
          correct={question.correct}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
        <QuizButton
          option={question.options[1]}
          correct={question.correct}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
        <QuizButton
          option={question.options[2]}
          correct={question.correct}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
        <QuizButton
          option={question.options[3]}
          correct={question.correct}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      </ButtonGroup>
    </Box>
  );
}

function QuizButton({ option, correct, onCorrect, onWrong }) {
  return (
    <Button
      // className="note-button"
      onClick={option === correct ? onCorrect : onWrong}
    >
      {option}
    </Button>
  );
}

// function QuizResults({ results }) {
//   let res = [];
//   results.forEach((r) => {
//     res.push(
//       <p>{r.question} - {r.correct} - {r.answer} - {
//         r.correct === r.answer ? "Correct" : "Wrong"
//       }</p>
//     )
//   });

//   return res;
// }

function QuizOver({ score, maxScore, resetFn }) {
  return (
    <div>
      {/* <QuizResults results={results} /> */}
      <p>
        Game over! Score: {score}/{maxScore}
      </p>
      <Button onClick={resetFn}>New Game</Button>
    </div>
  );
}
