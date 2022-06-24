import { Link } from "react-router-dom";
import SBlocPhotos from "./style";

export default function BlocPhotos() {
  return (
    <SBlocPhotos>
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
