import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import CardNewsBig from "@components/CardNewsBig";
import NewsList from "@components/NewsList";
import { useEffect } from "react";

import SNews from "./style";

export default function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="DANS LA TANIERE DES LOUVES" />
      <SNews>
        <CardNewsBig />
        <NewsList info="noLast" />
      </SNews>
    </>
  );
}
