import { NOTES, randomNote } from "./notes.js";

export const SCALE_PATTERNS = [
  {
    name: "Major",
    steps: [2, 2, 1, 2, 2, 2, 1],
  },
  {
    name: "Minor",
    steps: [2, 1, 2, 2, 1, 2, 2],
  }
];

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

export function getScaleNotes(note, step) {
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

export function getRandomSemitoneInterval(ignores) {
  let semitones = [...INTERVALS.keys()];
  if (ignores !== null) {
    ignores.forEach((e) => {
      let ignoreIdx = semitones.indexOf(e);
      if (ignoreIdx > -1) {
        semitones.splice(ignoreIdx, 1);
      }
    });
  }

  let r = Math.floor(Math.random() * semitones.length);
  return semitones[r];
};

export function getIntervalNote(root, semitones) {
  let rootIdx = NOTES.indexOf(root);
  let intervalIdx = (rootIdx + semitones) % NOTES.length;
  return NOTES[intervalIdx];
}

export function getIntervalNames(steps) {
  let i = 0;
  let names = ["Root"]
  steps.forEach(s => {
    i += s
    names.push(INTERVALS[i])
  });

  return names;
}

export function getRandomScale() {
  let p = Math.floor(Math.random() * SCALE_PATTERNS.length);
  let s = SCALE_PATTERNS[p];
  s.root = randomNote([]);
  s.notes = getScaleNotes(s.root, s.steps);
  s.intervalNames = getIntervalNames(s.steps);
  return s;
}

// console.log(getScaleNotes("C", STEPS.Major));
// console.log(getScaleNotes("A", STEPS.Minor));
