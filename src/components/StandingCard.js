import React from "react";

export const StandingCard = ({ standing, click }) => {
  return (
    <div className="standing_card" onClick={() => click(standing)}>
      {standing}
    </div>
  );
};
