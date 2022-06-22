import { Link } from "react-router-dom";
import imgLogo from "@assets/images/logos/sah-icon.png";
import img1 from "@assets/images/photos/AD103016.png";
import img2 from "@assets/images/photos/AD103090.png";
import img3 from "@assets/images/photos/Marketa.png";
import SBanSHop from "./style";

export default function BanSHop() {
  return (
    <SBanSHop>
      <Link to="boutique">
        <div className="imgPosition">
          <img src={imgLogo} alt="imgLogo" />
        </div>
        <section className="title">
          <h1>
            La boutique <br />
            de la meute
          </h1>
          <h2>Collection 2022-2023</h2>
        </section>
        <section className="mainImages">
          <img src={img3} alt="img3" className="img3" />
          <img src={img1} alt="img1" className="img1" />
          <img src={img2} alt="img2" className="img2" />
        </section>
      </Link>
    </SBanSHop>
  );
}
