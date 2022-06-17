import CardPlayer from "@components/CardPlayer";

import SPlayerList from "./style";

export default function PlayerList() {
  const players = [
    {
      name: "FRECON-DEMOUGE Romane",
      role: "role-1",
      number: 1,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-2",
      role: "role-2",
      number: 2,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-3",
      role: "role-3",
      number: 3,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-4",
      role: "role-4",
      number: 4,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-5",
      role: "role-5",
      number: 5,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-6",
      role: "role-6",
      number: 6,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-7",
      role: "role-7",
      number: 7,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-8",
      role: "role-8",
      number: 8,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-9",
      role: "role-9",
      number: 9,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-10",
      role: "role-10",
      number: 10,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-11",
      role: "role-11",
      number: 11,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-12",
      role: "role-12",
      number: 12,
      img: "./src/assets/images/cards/players/photo.png",
    },
    {
      name: "name-13",
      role: "role-13",
      number: 13,
      img: "./src/assets/images/cards/players/photo.png",
    },
  ];

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
