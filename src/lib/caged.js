import { note } from "./notes";

export const FORMS = ["C", "A", "G", "E", "D"];

export function getRandomForm(ignores) {
  let forms = [...FORMS];
  if (ignores !== null) {
    ignores.forEach((e) => {
      let ignoreIdx = forms.indexOf(e);
      if (ignoreIdx > -1) {
        forms.splice(ignoreIdx, 1);
      }
    });
  }

  let r = Math.floor(Math.random() * forms.length);
  return forms[r];
}

export function getChordFromForm(form, position) {
  let rootString, positionOffset;
  switch (form) {
    case "C":
      rootString = 5;
      positionOffset = 3;
      break;
    case "A":
      rootString = 5;
      positionOffset = 0;
      break;
    case "G":
      rootString = 6;
      positionOffset = 3;
      break;
    case "E":
      rootString = 6;
      positionOffset = 0;
      break;
    case "D":
      rootString = 4;
      positionOffset = 0;
      break;
  }

  return note(rootString, position + positionOffset);
}
