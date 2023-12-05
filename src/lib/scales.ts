import { NOTES } from "./notes.ts";

export const STEPS = {
  Major: [2, 2, 1, 2, 2, 2, 1],
  Minor: [2, 1, 2, 2, 1, 2, 2],
};

export const INTERVALS = [
  "Unison",
  "Minor 2nd",
  "Major 2nd",
  "Minor 3rd",
  "Major 3rd",
  "Perfect 4th",
  "Augmented 4th / Diminished 5th",
  "Perfect 5th",
  "Minor 6th",
  "Major 6th",
  "Minor 7th",
  "Major 7th",
  "Octave"
];

export function getScaleNotes(note: string, step: number[]) {
  let i = NOTES.indexOf(note);
  let notes = [note];
  for (let j = 0; j < step.length; j++) {
    i = (i + step[j]) % NOTES.length;
    notes.push(NOTES[i]);
  }
  return notes;
}

export function getRandomInterval() {
  let semitones = Math.floor(Math.random() * 13);
  return {
    semitones,
    intervalName: INTERVALS[semitones],
  };
}

export function getIntervalNote(root, semitones) {
  let rootIdx = NOTES.indexOf(root);
  let intervalIdx = (rootIdx + semitones) % NOTES.length;
  return NOTES[intervalIdx];
}

// console.log(getScaleNotes("C", STEPS.Major));
// console.log(getScaleNotes("A", STEPS.Minor));
