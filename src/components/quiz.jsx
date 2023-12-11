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
    <div>
      {/* <QuizStart /> */}
      <Question
        progress={progress}
        question={question}
        Layout={questionLayout}
        onCorrect={correctAnswer}
        onWrong={wrongAnswer}
      />
    </div>
  );
}

// Supporting components
function Question({ progress, question, Layout, onCorrect, onWrong }) {
  return (
    // <div className="quiz-game">
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
      {/* <p>Answer: {question.correct}</p> */}
    </Box>
    // </div>
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

// function QuizStart() {
//   const [stringState, setStringState] = React.useState({
//     "1": true,
//     "2": true,
//     "3": true,
//     "4": true,
//     "5": true,
//     "6": true,
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setStringState({
//       ...stringState,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   return (
//     <div>
//       <FormGroup>
//         <FormControlLabel
//           control={<Checkbox defaultChecked onChange={handleChange} />}
//           label="6"
//         />
//         <FormControlLabel
//           control={<Checkbox defaultChecked onChange={handleChange} />}
//           label="5"
//         />
//         <FormControlLabel
//           control={<Checkbox defaultChecked onChange={handleChange} />}
//           label="4"
//         />
//         <FormControlLabel
//           control={<Checkbox defaultChecked onChange={handleChange} />}
//           label="3"
//         />
//         <FormControlLabel
//           control={<Checkbox defaultChecked onChange={handleChange} />}
//           label="2"
//         />
//         <FormControlLabel
//           control={<Checkbox defaultChecked onChange={handleChange} />}
//           label="1"
//         />
//       </FormGroup>
//     </div>
//   );
// }

function QuizOver({ score, maxScore, resetFn }) {
  return (
    <div>
      <p>
        Game over! Score: {score}/{maxScore}
      </p>
      <button onClick={resetFn}>New Game</button>
    </div>
  );
}
