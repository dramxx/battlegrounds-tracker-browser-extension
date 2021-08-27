import React from "react";

export const HeroCard = ({ hero }) => {
  const getHeroTier = () => {
    switch (hero.tier) {
      case 1:
        return "t1_hero";
      case 2:
        return "t2_hero";
      case 3:
        return "t3_hero";
      case 4:
        return "t4_hero";
      default:
        return;
    }
  };

  return (
    <div className={`${getHeroTier()} hero_card`}>
      <div className="hero_card_name">{hero.name}</div>
    </div>
  );
};
