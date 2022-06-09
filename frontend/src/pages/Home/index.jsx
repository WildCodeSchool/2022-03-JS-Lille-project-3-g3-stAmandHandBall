import Timer from "@components/counter";
import Partner from "@components/Partner";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <p>Home</p>
      <Partner />
      <Timer />
    </SHome>
  );
}
