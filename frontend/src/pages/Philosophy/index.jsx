import BigPicture from "@components/Archi/BigPicture";
import BigTitle from "@components/Archi/BigTitle";
import TextPhilosophy from "@components/TextPhilosophy";
import { useEffect } from "react";
import SPhilosophy from "./style";

export default function Philosophy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="PHILOSOPHIE" />
      <SPhilosophy>
        <TextPhilosophy />
      </SPhilosophy>
    </>
  );
}
