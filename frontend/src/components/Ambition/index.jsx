import { Link } from "react-router-dom";
import logoambition from "@assets/images/logos/sah-ambitions.png";
import SAmbition from "./style";

export default function Ambition() {
  return (
    <SAmbition>
      <Link to="ambition">
        <div className="title">
          <p>Des projets pour et </p>
          <img src={logoambition} alt="logoambition" />
          <p> avec le territoire</p>
        </div>
        <div className="secondtitle">Ambitions 2024</div>
      </Link>
    </SAmbition>
  );
}
