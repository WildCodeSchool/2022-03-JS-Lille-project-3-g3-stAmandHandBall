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
          <a href="https://www.facebook.com/SaintAmandHandball">
            <img src={imgfacebook} alt="imgfacebook" />
          </a>
          <a href="https://www.instagram.com/saintamandhandball/">
            <img src={imginstagram} alt="imginstagram" />
          </a>
          <a href="https://twitter.com/SaintAmandHand">
            <img src={imgtwitter} alt="imgtwitter" />
          </a>
          <a href="https://www.youtube.com/channel/UCm-vdLQoYHfuhhPmn4k7txQ">
            <img src={imgyoutube} alt="imgyoutube" />
          </a>
          <a href="https://www.linkedin.com/company/sahph/">
            <img src={imglinkedin} alt="imglinkedin" />
          </a>
          <a href="https://www.twitch.tv/saintamandhand">
            <img src={imgtwitch} alt="imgmail" />
          </a>
        </div>
        <div className="hash">
          <p>#louves</p>
          <p>#sahpartaucombat</p>
        </div>
      </div>
    </SNetworks>
  );
}
