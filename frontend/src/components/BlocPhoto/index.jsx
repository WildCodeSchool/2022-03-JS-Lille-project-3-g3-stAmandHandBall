import { Link } from "react-router-dom";
import SBlocPhotos from "./style";

export default function BlocPhotos() {
  return (
    <SBlocPhotos>
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
    </SBlocPhotos>
  );
}
