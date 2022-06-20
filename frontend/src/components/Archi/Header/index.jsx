import { Link } from "react-router-dom";
import LogoDesktop from "@assets/images/logos/sah-wolf-triangle.svg";
import LogoMobile from "@assets/images/logos/clubs/sah.png";
import Navbar from "../Navbar";
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
