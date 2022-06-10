import imgNetworks from "@assets/imgNetworks.jpg";
import imgfacebook from "@assets/Facebook.png";
import imginstagram from "@assets/Instagram.png";
import imglinkedin from "@assets/LinkedIn.png";
import imgtwitch from "@assets/twitch.png";
import imgyoutube from "@assets/picto-bleu-youtube.png";
import imgtwitter from "@assets/Twitter.png";
import SNetworks from "./style";

export default function Networks() {
  return (
    <SNetworks>
      <div className="imgPosition">
        <img src={imgNetworks} alt="imgNetworks" />
      </div>
      <div className="cube">
        <div className="title"> rejoignez la meute</div>
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
