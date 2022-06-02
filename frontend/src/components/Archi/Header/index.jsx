import Navbar from "@components/Archi/Navbar";
import Logo from "@assets/Pictures/Logotest.png";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <img className="logo" src={Logo} alt="Wolf_Logo" />
      <Navbar className="Navbar" />
      <div className="baseHeader" />
    </SHeader>
  );
}
