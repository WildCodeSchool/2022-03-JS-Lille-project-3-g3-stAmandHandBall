import CardPlayer from "@components/CardPlayer";
import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import SPlayerList from "./style";

export default function PlayerList() {
  const { players } = useContext(ctxProvider);

  return (
    <SPlayerList>
      {players.map((player) => {
        return (
          <CardPlayer
            key={player.name}
            name={player.name}
            img={player.img}
            number={player.number}
          />
        );
      })}
    </SPlayerList>
  );
}
