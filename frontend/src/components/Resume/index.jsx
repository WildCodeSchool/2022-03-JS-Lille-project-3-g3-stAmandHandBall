import ImgNews from "@assets/ImgNews.png";
import SResume from "./style";

export default function Networks() {
  return (
    <SResume>
      <div className="imgPosition">
        <img src={ImgNews} alt="imgNetworks" />
      </div>
      <div className="title">Résumé de match</div>
      <div className="cube">
        <div className="hash">
          <div className="vide"> </div>
          <p>
            Lorem ipsum dolor sit amet. Qui assumenda consectetur qui galisum
            fugiat quo nihil culpa? Ab placeat ratione non molestias quia ab
            perspiciatis sunt aut nihil ipsa a sequi tempora ea sapiente dolor
            praesentium quod.
            <br /> Et exercitationem repudiandae id autem autem et atque
            repudiandae nam omnis aliquam.
          </p>
        </div>
      </div>
    </SResume>
  );
}
