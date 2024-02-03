import React, { useState } from "react";
import fb from "../img/fretboard.png";

import Box from "@mui/material/Box";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Switch from "@mui/material/Switch"

export function Fretboard() {
  let [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Box>
      <FormControl component="fieldset">
        <FormControlLabel
          value="show-fretboard"
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Show fretboard"
          labelPlacement="end"
        />
      </FormControl>
      <FretboardImage show={checked} />
    </Box>
  );
}

function FretboardImage({ show }) {
  return show ?
    (
      <img src={fb} alt="Guitar fretboard" />
    ) : (
      <></>
    );
}