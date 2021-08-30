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
        style={{ width: "100%" }}
        onChange={(e) => setHero(e.target.outerText)}
        getOptionLabel={(option) => option.name}
        options={heroes.sort((a, b) => a.tier === b.tier)}
        groupBy={(hero) => `Tier ${hero.tier}`}
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
