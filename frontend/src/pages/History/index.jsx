import ctxProvider from "@services/context/Ctx";
import { useContext } from "react";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import CardEvent from "@components/CardEvent";
import Title from "@components/Archi/Title";
import PuceHistory from "@components/PuceHistory";
import SHistory from "./style";

export default function History() {
  const { history } = useContext(ctxProvider);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="L’ORIGINE DE LA MEUTE" />
      <SHistory>
        <article>
          <p>
            Lorem ipsum dolor sit amet. Ab soluta ipsa eos dolorem perspiciatis
            sed consequatur explicabo! Non consequatur aliquam ut internos
            expedita eos consectetur porro. Aut quia autem qui animi voluptate
            qui commodi excepturi. Qui maxime quae et sunt saepe sit nisi
            tempora id reprehenderit minus. Et impedit eius sed Quis voluptatem
            vero ipsam in ipsa provident. Est omnis rerum quo corrupti iste aut
            tempore harum est enim magni. Vel excepturi voluptatem qui
            laboriosam aspernatur sit odit numquam ut minima velit. Qui itaque
            architecto sed quasi dolores sed quis accusamus sed consequuntur
            dolore. Aut alias quas et quia nihil ut consequatur ducimus. Et
            aspernatur laboriosam sit vitae dolore ut velit possimus quo tenetur
            labore aut ullam ullam aut labore quae quo maxime ipsum. Sit
            consequuntur quidem et maxime dolores qui repudiandae repellendus ab
            recusandae perferendis ea voluptatibus quas qui.
          </p>
        </article>
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
        <Title title="PERSONNALITES DE LA MEUTE" />
      </SHistory>
      <PuceHistory />
    </>
  );
}
