import { Link } from "react-router-dom";
import SPartner from "./style";

export default function Partner() {
  return (
    <SPartner>
      <div className="buttonPosition">
        <Link to="partenaires">
          <button type="button">NOS PARTENAIRES</button>
        </Link>
      </div>
    </SPartner>
  );
}
