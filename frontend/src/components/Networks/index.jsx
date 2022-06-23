import imgfacebook from "@assets/images/logos/picto-facebook.png";
import imginstagram from "@assets/images/logos/picto-instagram.png";
import imglinkedin from "@assets/images/logos/picto-linkedin.png";
import imgtwitch from "@assets/images/logos/picto-twitch.png";
import imgyoutube from "@assets/images/logos/picto-youtube.png";
import imgtwitter from "@assets/images/logos/picto-twitter.png";
import SNetworks from "./style";

export default function Networks() {
  return (
    <SNetworks image="networks.jpg">
      <div className="cube">
        <div className="title">REJOIGNEZ LA MEUTE</div>
        <div className="logo">
          <img src={imgfacebook} alt="imgfacebook" />
          <img src={imginstagram} alt="imginstagram" />
          <img src={imgtwitter} alt="imgtwitter" />
          <img src={imgyoutube} alt="imgyoutube" />
          <img src={imglinkedin} alt="imglinkedin" />
          <img src={imgtwitch} alt="imgmail" />
        </div>
        <div className="hash">
          <p>#louves</p>
          <p>#sahpartaucombat</p>
        </div>
      </div>
    </SNetworks>
  );
}
