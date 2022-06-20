import Timer from "@components/counter";
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
      <p>Home</p>
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
