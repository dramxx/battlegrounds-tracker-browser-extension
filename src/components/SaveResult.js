import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Slider from "@material-ui/core/Slider";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

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
        renderOption={(option, { inputValue }) => {
          const matches = match(option.name, inputValue);
          const parts = parse(option.name, matches);
          return (
            <div>
              {parts.map((part, index) => {
                console.log({ part });
                return (
                  <span
                    key={index}
                    style={{ fontWeight: part.highlight ? 700 : 400 }}
                  >
                    {part.text}
                  </span>
                );
              })}
            </div>
          );
        }}
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
