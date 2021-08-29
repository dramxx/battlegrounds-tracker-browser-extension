import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Slider from "@material-ui/core/Slider";

export const SaveResult = ({ heroes, setHero, standings, setStanding }) => {
  return (
    <div className="page">
      <Autocomplete
        onChange={(e) => setHero(e.target.outerText)}
        options={heroes}
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
          marks={standings}
          defaultValue={0}
          step={1}
          min={1}
          max={standings.length}
        />
      </div>
    </div>
  );
};
