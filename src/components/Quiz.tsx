import React from "react";
import { useState } from "react";
import * as notes from '../lib/notes.ts';
import "./Quiz.css"

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
      score: progress.score
    });
    setQuestion(createQuestionData());
  }

  const correctAnswer = () => {
    setProgress({
      count: progress.count + 1,
      score: progress.score + 1,
    });
    setQuestion(createQuestionData());
  }

  const resetGame = () => {
    setProgress({
      count: 1,
      score: 0,
    });
    setQuestion(createQuestionData());
  }

  return progress.count > 20 ?
    <GameOver score={progress.score} resetFn={resetGame}/> :
    <Question
      progress={progress}
      question={question}
      onCorrect={correctAnswer}
      onWrong={wrongAnswer}
    />
}


// Supporting components
function Question({progress, question, onCorrect, onWrong}) {
  return (
    <div className="quiz-game">
      <p>
        Question {progress.count}/{MAX_COUNT}
      </p>
      <p>Score: {progress.score}</p>
      <p>String: {question.string}</p>
      <p>Fret: {question.fret}</p>
      <button
        className="note-button"
        onClick={question.options[0] === question.note ? onCorrect : onWrong}
      >
        {question.options[0]}
      </button>
      <button
        className="note-button"
        onClick={question.options[1] === question.note ? onCorrect : onWrong}
      >
        {question.options[1]}
      </button>
      <button
        className="note-button"
        onClick={question.options[2] === question.note ? onCorrect : onWrong}
      >
        {question.options[2]}
      </button>
      <button
        className="note-button"
        onClick={question.options[3] === question.note ? onCorrect : onWrong}
      >
        {question.options[3]}
      </button>
      <p>Answer: {question.note}</p>
    </div>
  );
}


function GameOver({score, resetFn}) {
  return (<div>
    <p>Game over! Score: {score}/{MAX_COUNT}</p>
    <button onClick={resetFn}>New Game</button>
  </div>);
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
