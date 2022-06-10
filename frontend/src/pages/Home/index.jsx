import Ambition from "@components/Ambition";
import Partner from "@components/Partner";
import Networks from "@components/Networks";
import BanShop from "@components/BanShop";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <p>Home</p>
      <BanShop />
      <Networks />
      <Ambition />
      <Partner />
    </SHome>
  );
}
