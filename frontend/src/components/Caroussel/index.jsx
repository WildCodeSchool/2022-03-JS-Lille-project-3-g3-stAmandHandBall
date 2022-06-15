import CardPlayer from "@components/CardPlayer";
import { useState, useContext } from "react";
import ctxProvider from "@services/context/Ctx";

import SCaroussel from "./style";

export default function Caroussel() {
  const [position, setPosition] = useState(0);

  const { players } = useContext(ctxProvider);

  const prevSlide = () => {
    if (position === 0) return;
    setPosition(position - 1);
  };
  const nextSlide = () => {
    if (position + 4 >= players.length) return;
    setPosition(position + 1);
  };
  return (
    <SCaroussel>
      <div className="carouselContainer">
        <button type="button" onClick={prevSlide}>
          &lsaquo;
        </button>
        {players
          .filter((toto, img) => img >= position && img < position + 4)
          .map((player) => {
            return (
              <CardPlayer
                key={player.name}
                name={player.name}
                img={player.img}
                number={player.number}
              />
            );
          })}
        <button type="button" onClick={nextSlide}>
          &rsaquo;
        </button>
      </div>
    </SCaroussel>
  );
}
