import imgGriffe from "@assets/Griffebleu.png";
import imgBTZ from "@assets/BTZ.png";
import imgSAH from "@assets/Logo_SAH.png";
import imgLFH from "@assets/FFHB.png";
import SFooter from "./style";

export default function Footer() {
  return (
    <SFooter>
      <div className="imgPosition">
        <img src={imgGriffe} alt="imgGriffe" />
      </div>
      <div className="buttonPosition">
        <button type="button">
          <p>Nous contacter</p>
        </button>
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
