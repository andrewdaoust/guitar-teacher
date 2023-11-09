import { NOTES } from "./notes";

export const STEPS = {
  Major: [2, 2, 1, 2, 2, 2, 1],
  Minor: [2, 1, 2, 2, 1, 2, 2],
};

export function getScaleNotes(note: string, step: number[]) {
  let i = NOTES.indexOf(note);
  let notes = [note];
  for (let j = 0; j < step.length; j++) {
    i = (i + step[j]) % NOTES.length;
    notes.push(NOTES[i]);
  }
  return notes;
}

// console.log(getScaleNotes("C", STEPS.Major));
// console.log(getScaleNotes("A", STEPS.Minor));
