import { Link } from "react-router-dom";
import imgCoachs from "@assets/images/photos/coach.jpg";
import imgNf1 from "@assets/images/photos/n1f.png";
import imgNonProfessional from "@assets/images/photos/amateur.jpg";
import imgFormation from "@assets/images/photos/formation.jpg";
import imgTerritoriale from "@assets/images/photos/territoriale.jpg";

import SBlocPhotos from "./style";

export default function BlocPhotos() {
  return (
    <SBlocPhotos
      imgCoachs={imgCoachs}
      imgNf1={imgNf1}
      imgNonProfessional={imgNonProfessional}
      imgTerritoriale={imgTerritoriale}
      imgFormation={imgFormation}
    >
      <section>
        <div className="firstPart">
          <Link to="bergersDesLouveteaux">
            <div className="photoDiv firstPhoto">
              <h3 className="titlePhoto">COACHS</h3>
            </div>
          </Link>
          <Link to="equipe">
            <div className="photoDiv secondPhoto">
              <h3 className="titlePhoto">N1F</h3>
            </div>
          </Link>
          <Link to="amateurs">
            <div className="photoDiv thirdPhoto">
              <h3 className="titlePhoto">AMATEURS</h3>
            </div>
          </Link>
        </div>
        <div className="secondPart">
          <Link to="amateurs">
            <div className="photoDiv fourthPhoto">
              <h3 className="titlePhoto">TERRITORIALES</h3>
            </div>
          </Link>
          <Link to="formation">
            <div className="photoDiv fifthPhoto">
              <h3 className="titlePhoto">FORMATION</h3>
            </div>
          </Link>
        </div>
      </section>
    </SBlocPhotos>
  );
}
