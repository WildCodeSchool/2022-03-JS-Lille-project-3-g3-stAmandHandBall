import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ctxProvider from "@services/context/Ctx";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import SNonProfessional from "./style";

export default function NonProfessional() {
  const { team } = useContext(ctxProvider);
  const divisions = ["NATIONALE", "TERRITORIALE", "FORMATION"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              <div key={division} className="division">
                <div className="subtitle">
                  <h3>{division}</h3>
                </div>
                {team
                  .filter((element) => {
                    if (element.id === 2) {
                      return false;
                    }
                    return element.division === division;
                  })
                  .map((element) => {
                    return (
                      <Link key={element.id} to={`/amateurs/${element.id}`}>
                        <div
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
