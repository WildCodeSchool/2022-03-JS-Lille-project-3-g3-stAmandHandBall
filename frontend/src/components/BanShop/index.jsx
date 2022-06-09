import imgLogo from "@assets/Pictures/Logo_Loup_SAH.png";
import img1 from "@assets/Pictures/AD103016.png";
import img2 from "@assets/Pictures/AD103090.png";
import img3 from "@assets/Pictures/Marketa.png";
import SBanSHop from "./style";

export default function BanSHop() {
  return (
    <SBanSHop>
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
    </SBanSHop>
  );
}
