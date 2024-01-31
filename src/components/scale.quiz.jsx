import React from "react";
import { useState } from "react";
import * as notes from "../lib/notes";
// import * as scales from "../lib/scales";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function ScaleQuiz({ scale }) {
  const [answers, setAnswers] = useState(Array(scale.notes.length).fill(scale.root));

  // console.log(scale);

  return (
    <Box sx={{ minWidth: 120 }}>
      <h1>{scale.root} {scale.name}</h1>
      <ScaleNoteOption
        i={0}
        scale={scale}
        answers={answers}
        setAnswers={setAnswers}
      />
      <ScaleNoteOption
        i={1}
        scale={scale}
        answers={answers}
        setAnswers={setAnswers}
      />
      <ScaleNoteOption
        i={2}
        scale={scale}
        answers={answers}
        setAnswers={setAnswers}
      />
      <ScaleNoteOption
        i={3}
        scale={scale}
        answers={answers}
        setAnswers={setAnswers}
      />
      <ScaleNoteOption
        i={4}
        scale={scale}
        answers={answers}
        setAnswers={setAnswers}
      />
      <ScaleNoteOption
        i={5}
        scale={scale}
        answers={answers}
        setAnswers={setAnswers}
      />
      <ScaleNoteOption
        i={6}
        scale={scale}
        answers={answers}
        setAnswers={setAnswers}
      />
      <ScaleNoteOption
        i={7}
        scale={scale}
        answers={answers}
        setAnswers={setAnswers}
      />
    </Box>
  );
}

function ScaleNoteOption({ i, scale, answers, setAnswers }) {
  const onChange = (event) => {
    let newAnswers = [...answers];
    newAnswers[i] = event.target.value;
    setAnswers(newAnswers);
  };

  const intervalName = scale.intervalNames[i];

  return (
    <FormControl fullWidth>
      <InputLabel id={intervalName}>{intervalName}</InputLabel>
      <Select
        labelId={intervalName}
        id={intervalName}
        value={answers[i]}
        label={intervalName}
        onChange={onChange}
      >
        <MenuItem value={notes.NOTES[0]}>{notes.NOTES[0]}</MenuItem>
        <MenuItem value={notes.NOTES[1]}>{notes.NOTES[1]}</MenuItem>
        <MenuItem value={notes.NOTES[2]}>{notes.NOTES[2]}</MenuItem>
        <MenuItem value={notes.NOTES[3]}>{notes.NOTES[3]}</MenuItem>
        <MenuItem value={notes.NOTES[4]}>{notes.NOTES[4]}</MenuItem>
        <MenuItem value={notes.NOTES[5]}>{notes.NOTES[5]}</MenuItem>
        <MenuItem value={notes.NOTES[6]}>{notes.NOTES[6]}</MenuItem>
        <MenuItem value={notes.NOTES[7]}>{notes.NOTES[7]}</MenuItem>
        <MenuItem value={notes.NOTES[8]}>{notes.NOTES[8]}</MenuItem>
        <MenuItem value={notes.NOTES[9]}>{notes.NOTES[9]}</MenuItem>
        <MenuItem value={notes.NOTES[10]}>{notes.NOTES[10]}</MenuItem>
        <MenuItem value={notes.NOTES[11]}>{notes.NOTES[11]}</MenuItem>
      </Select>
    </FormControl>
  );
}


//////////////
//
// C Major
//
// C
//
// Select v
//   A
//   A#
//   B
//   ...
//   G
//   G#
//
// Select ^
//
// Select ^
//
// Select ^
//
// Select ^
//
// Select ^
//
// C
//
//
// Submit