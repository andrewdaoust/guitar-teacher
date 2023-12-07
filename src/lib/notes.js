export const NOTES = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
]

const STRINGS = {
  1: NOTES.indexOf("E"),
  2: NOTES.indexOf("B"),
  3: NOTES.indexOf("G"),
  4: NOTES.indexOf("D"),
  5: NOTES.indexOf("A"),
  6: NOTES.indexOf("E"),
};

export function note(stringNumber, fretNumber) {
  let n = (STRINGS[stringNumber] + fretNumber) % 12;
  return NOTES[n];
};

export function randomNote(ignores) {
  let notes = [...NOTES];
  if (ignores !== null) {
    ignores.forEach((e) => {
      let ignoreIdx = notes.indexOf(e);
      if (ignoreIdx > -1) {
        notes.splice(ignoreIdx, 1);
      }
    });
  }

  let r = Math.floor(Math.random() * notes.length);
  return notes[r];
};

export function randomString() {
  return Math.floor(Math.random() * 6) + 1;
};

export function randomFret(maxFrets) {
  return Math.floor(Math.random() * maxFrets);
};



// Move this to formal testing code later
// let E0 = note(6, 0);
// // SHould be E
// console.log(E0);

// let e1 = note(1, 1);
// // Should be F
// console.log(e1);

// let D7 = note(4, 5);
// // Should be G
// console.log(D7);

// let A12 = note(5, 12);
// // Should be A
// console.log(A12);
