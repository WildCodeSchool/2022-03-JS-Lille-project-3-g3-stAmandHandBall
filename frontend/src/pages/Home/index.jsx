import Counter from "@components/Counter";
import BigPicture from "@components/Archi/BigPicture";
import Arrow from "@components/Archi/Arrow";
import Ambition from "@components/Ambition";
import Partner from "@components/Partner";
import Networks from "@components/Networks";
import BanShop from "@components/BanShop";
import Caroussel from "@components/Caroussel";
import BlocPhotos from "@components/BlocPhoto";
import { useEffect } from "react";
import SHome from "./style";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SHome>
      <BigPicture
        img="test"
        date=""
        hour=""
        club1=""
        club2=""
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
      />
      <Counter />
      <Caroussel />
      <div className="arrow">
        <Arrow />
      </div>
      <BlocPhotos />
      <div className="arrow">
        <Arrow />
      </div>
      <BanShop />
      <Networks />
      <Ambition />
      <Partner />
    </SHome>
  );
}
