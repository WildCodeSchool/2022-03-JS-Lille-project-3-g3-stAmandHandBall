import CardPlayer from "@components/CardPlayer";
import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import SPlayerList from "./style";

export default function PlayerList() {
  const { players } = useContext(ctxProvider);

  return (
    <SPlayerList>
      {players.map((player) => {
        players.sort((plA, plB) => {
          if (plA.captain === 1) return -1;
          if (plB.captain === 1) return 1;

          if (plA.position.indexOf("Gardienne") === 0) return -1;
          if (plB.position.indexOf("Gardienne") === 0) return 1;

          if (plA.number < plB.number) return -1;
          return 1;
        });
        return (
          <CardPlayer
            key={player.id}
            name={`${player.firstname} ${player.lastname}`}
            //  We need the image field in the db to be null for the test image
            img={`./src/assets/images/cards/players/${player.img || "test.png"} 
             `}
            number={player.number}
          />
        );
      })}
    </SPlayerList>
  );
}
