
import { Link } from "react-router-dom";
import imgGriffe from "@assets/images/elements/claw-blue.svg";
import imgBTZ from "@assets/images/logos/ligue-butagaz.png";
import imgSAH from "@assets/images/logos/sah.png";
import imgLFH from "@assets/images/logos/lfh.png";
import SFooter from "./style";

export default function Footer() {
  return (
    <SFooter>
      <div className="imgPosition">
        <img src={imgGriffe} alt="imgGriffe" />
      </div>
      <div className="buttonPosition">
        <Link to="contact">
          <button type="button">
            <p>Nous contacter</p>
          </button>
        </Link>
      </div>
      <section className="logo">
        <img src={imgBTZ} alt="imgBTZ" />
        <img src={imgSAH} alt="imgSAH" />
        <img src={imgLFH} alt="imgLFH" />
      </section>
      <div className="reve">
        <p>#L'Ambition de rêver plus haut</p>
      </div>
    </SFooter>
  );
}
