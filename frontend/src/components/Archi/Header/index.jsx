import LogoDesktop from "@assets/images/logos/sah-wolf-triangle.svg";
import LogoMobile from "@assets/images/logos/clubs/sah.png";
import Navbar from "../Navbar";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <Navbar />
      <img className="logoDesktop" src={LogoDesktop} alt="Wolf_Logo" />
      <img className="logoMobile" src={LogoMobile} alt="Wolf_Logo" />
    </SHeader>
  );
}
