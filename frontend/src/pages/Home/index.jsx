import Timer from "@components/counter";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Ambition from "@components/Ambition";
import Partner from "@components/Partner";
import Networks from "@components/Networks";
import BanShop from "@components/BanShop";
import Caroussel from "@components/Caroussel";
import BlocCf from "@components/BlocCf";
import BlocPhotos from "@components/BlocPhoto";
import SHome from "./style";

export default function Home() {
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
      <BigTitle title="COMPTEUR EN COURS" />
      <Caroussel />
      <BlocPhotos />
      <BlocCf />
      <BanShop />
      <Networks />
      <Ambition />
      <Partner />
      <Timer />
    </SHome>
  );
}
