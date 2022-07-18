import { useContext } from "react";
import { Link } from "react-router-dom";
import ctxProvider from "@services/context/Ctx";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import SNonProfessional from "./style";

export default function NonProfessional() {
  const { team } = useContext(ctxProvider);
  const divisions = ["NATIONALE", "TERRITORIALE", "FORMATION"];

  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="AMATEUR" />
      <SNonProfessional>
        <div className="title">
          <h2>DIVISIONS</h2>
        </div>
        <div className="allDivisions">
          {divisions.map((division) => {
            return (
              <div className="division">
                <div className="subtitle">
                  <h3>{division}</h3>
                </div>
                {team
                  .filter((element) => element.division === division)
                  .map((element) => {
                    return (
                      <Link to={`/amateurs/${element.id}`}>
                        <div
                          key={element.id}
                          id={element.id}
                          title={element.title}
                          division={element.division}
                        >
                          {element.title}
                        </div>
                      </Link>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </SNonProfessional>
    </>
  );
}
