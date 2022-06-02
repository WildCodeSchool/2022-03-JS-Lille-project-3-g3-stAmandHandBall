import Navbar from "@components/Archi/Navbar";
import LogoDesktop from "@assets/Pictures/LogoDesktop.svg";
import LogoMobile from "@assets/Pictures/LogoMobile.png";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <img className="logoDesktop" src={LogoDesktop} alt="Wolf_Logo" />
      <img className="logoMobile" src={LogoMobile} alt="Wolf_Logo" />
      <Navbar />
      <div className="baseHeader" />
    </SHeader>
  );
}
