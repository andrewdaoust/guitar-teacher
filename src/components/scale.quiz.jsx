import React from "react";
import { useState } from "react";
import * as notes from "../lib/notes";
import * as scales from "../lib/scales";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function ScaleQuiz() {
  const rootNote = notes.randomNote();
  const scale = scales.getScaleNotes(rootNote, scales.getRandomStepPattern());
  // const [note, setNote] = useState("C");
  // const [scaleType, setScaleType] = useState("Major");

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleScaleChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="note-label">Note</InputLabel>
        <Select
          labelId="note-label"
          id="note"
          value={note}
          label="Note"
          onChange={handleNoteChange}
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

      <FormControl fullWidth>
        <InputLabel id="scale-label">Scale</InputLabel>
        <Select
          labelId="scale-label"
          id="scale"
          value={scaleType}
          label="Scale"
          onChange={handleScaleChange}
        >
          <MenuItem value={"Major"}>Major</MenuItem>
          <MenuItem value={"Minor"}>Minor</MenuItem>
        </Select>
      </FormControl>
    </Box>
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