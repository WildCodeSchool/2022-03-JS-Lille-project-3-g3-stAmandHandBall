import { Link } from "react-router-dom";
import logoambition from "@assets/images/logos/sah-ambitions.png";
import SAmbition from "./style";

export default function Ambition() {
  return (
    <SAmbition>
      <Link to="ambition">
        <div className="title">
          <p className="noMobile">DES PROJETS POUR ET </p>
          <img src={logoambition} alt="logoambition" />
          <p className="noMobile"> AVEC LE TERRITOIRE</p>
        </div>
        <p className="mobile">DES PROJETS POUR ET AVEC LE TERRITOIRE</p>
        <div className="secondtitle">AMBITIONS 2024</div>
      </Link>
    </SAmbition>
  );
}
