import ctxProvider from "@services/context/Ctx";
import { useContext } from "react";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import CardEvent from "@components/CardEvent";
import SHistory from "./style";

export default function History() {
  const { history } = useContext(ctxProvider);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="L’ORIGINE DE LA MEUTE" />
      <SHistory>
        {history.map((historys) => {
          return (
            <CardEvent
              className={historys.id % 2 === 0 ? "right" : "left"}
              key={historys.id}
              id={historys.id}
              title={historys.title}
              text={historys.text}
            />
          );
        })}
      </SHistory>
    </>
  );
}
