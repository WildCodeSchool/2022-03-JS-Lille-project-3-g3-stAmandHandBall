import { Link } from "react-router-dom";
import SBanSHop from "./style";

export default function BanSHop() {
  return (
    <SBanSHop img="background-boutique.jpg">
      <Link to="boutique">
        <section className="title">
          <h2>
            LA BOUTIQUE <br />
            DE LA MEUTE
          </h2>
          <h3>Collection 2022-2023</h3>
        </section>
      </Link>
    </SBanSHop>
  );
}
