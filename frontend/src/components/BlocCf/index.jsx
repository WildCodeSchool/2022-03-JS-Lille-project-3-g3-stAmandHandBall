import { Link } from "react-router-dom";
import SBlocCf from "./style";

export default function BlocCf() {
  return (
    <SBlocCf>
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
    </SBlocCf>
  );
}
