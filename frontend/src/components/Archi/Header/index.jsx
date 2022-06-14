import Navbar from "@components/Archi/Navbar";
import LogoDesktop from "@assets/Pictures/LogoDesktop.svg";
import LogoMobile from "@assets/Pictures/LogoMobile.png";
import { Link } from "react-router-dom";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <Navbar />
      <Link to="/">
        <img className="logoDesktop" src={LogoDesktop} alt="Wolf_Logo" />
        <img className="logoMobile" src={LogoMobile} alt="Wolf_Logo" />
      </Link>
    </SHeader>
  );
}
