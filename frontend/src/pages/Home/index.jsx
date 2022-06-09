import Ambition from "@components/Ambition";
import Partner from "@components/Partner";
import Networks from "@components/Networks";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <p>Home</p>
      <Networks />
      <Ambition />
      <Partner />
    </SHome>
  );
}
