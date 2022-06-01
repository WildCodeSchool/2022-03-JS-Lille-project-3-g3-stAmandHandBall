import Navbar from "@components/Archi/Navbar";
import Frontimg from "@assets/Pictures/test.jpg";
import Logo from "@assets/Pictures/Logotest.png";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <img className="logo" src={Logo} alt="Wolf_Logo" />
      <div>
        <Navbar />
        {/* photoTest */}
        <img src={Frontimg} alt="Victory" />
      </div>
    </SHeader>
  );
}
