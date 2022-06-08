import logoambition from "@assets/Logoambition.png";
import SAmbition from "./style";

export default function Ambition() {
  return (
    <SAmbition>
      <div className="title">
        <p>Des projets pour et </p>
        <img src={logoambition} alt="logoambition" />
        <p> avec le territoire</p>
      </div>
      <div className="secondtitle">Ambition 2024</div>
    </SAmbition>
  );
}
