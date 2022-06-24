import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import CardEvent from "@components/CardEvent";
import ctxProvider from "@services/context/Ctx";
import { useContext } from "react";
import SHistory from "./style";

export default function History() {
  const { historys } = useContext(ctxProvider);

  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="L’ORIGINE DE LA MEUTE" />
      <SHistory>
        {historys.map((history) => {
          return (
            <CardEvent
              className={history.id % 2 === 0 ? "right" : "left"}
              key={history.id}
              id={history.id}
              date={history.title}
              text={history.text}
            />
          );
        })}
      </SHistory>
    </>
  );
}
