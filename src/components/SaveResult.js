import React from "react";
import { HEROES, STANDINGS } from "../utils/config";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Slider from "@material-ui/core/Slider";

export const SaveResult = ({ setHero, setStanding }) => {
  return (
    <div className="page">
      <Autocomplete
        onChange={(e) => setHero(e.target.outerText)}
        options={HEROES}
        getOptionLabel={(option) => option.name}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label="Select Hero" variant="outlined" />
        )}
      />
      <div className="standings_slider">
        <Slider
          onChangeCommitted={(e, value) => setStanding(value)}
          getAriaValueText={(value) => value}
          aria-labelledby="discrete-slider-custom"
          valueLabelDisplay="off"
          marks={STANDINGS}
          defaultValue={0}
          step={1}
          min={1}
          max={STANDINGS.length}
        />
      </div>
    </div>
  );
};
