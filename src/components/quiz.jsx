import React from "react";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  Box,
} from "@mui/material";
import { create } from "zustand";

const useResultStore = create((set) => ({
  results: [],
  addResult: (res) => set((state) => ({ results: [...state.results, res] })),
  resetResults: () => set({ results: [] }),
}));


export function Quiz({ maxQuestions, questionLayout, questionDataFunc }) {
  let [question, setQuestion] = useState(questionDataFunc());
  let [progress, setProgress] = useState({
    count: 1,
    score: 0,
    max: maxQuestions,
  });
  const resetResults = useResultStore((state) => state.resetResults);

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
    resetResults();
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
  const addResult = useResultStore((state) => state.addResult);
  const onClick = () => {
    if (option === correct) {
      onCorrect();
    } else {
      onWrong();
    }
    addResult({ userAnswer: option, correctAnswer: correct })
  }
  return (
    <Button
      // className="note-button"
      onClick={onClick}
    >
      {option}
    </Button>
  );
}

function QuizResults() {
  const results = useResultStore((state) => state.results);
  let res = [];
  results.forEach((r) => {
    res.push(
      <p>
        {r.userAnswer} - {r.correctAnswer} - {r.userAnswer === r.correctAnswer ? "Correct" : "Wrong"}
      </p>
    );
  });

  return res;
}

function QuizOver({ score, maxScore, resetFn }) {
  return (
    <div>
      <QuizResults />
      <p>
        Game over! Score: {score}/{maxScore}
      </p>
      <Button onClick={resetFn}>New Game</Button>
    </div>
  );
}
