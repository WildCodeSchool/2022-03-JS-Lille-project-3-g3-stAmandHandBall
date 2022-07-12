import { useContext } from "react";
import { Link } from "react-router-dom";
import ctxProvider from "@services/context/Ctx";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import SNonProfessional from "./style";

export default function NonProfessional() {
  const { team } = useContext(ctxProvider);

  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="TITRE A VOIR" />
      <SNonProfessional>
        {team.map((element) => {
          return (
            <Link to={`/amateurs/${element.id}`}>
              <div
                key={element.id}
                id={element.id}
                title={element.title}
                division={element.division}
              >
                {element.division}
              </div>
            </Link>
          );
        })}
      </SNonProfessional>
    </>
  );
}