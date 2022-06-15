import { Link } from "react-router-dom";
import STableAmateurTeam from "./style";

export default function tableAmateurTeam() {
  const nationalMenus = [
    <Link to="/N1F">N1F</Link>,
    <Link to="/N3F">N3F</Link>,
    <Link to="/U17F">U17F</Link>,
  ];
  const territorialMenus = [
    <Link to="/SG">SG</Link>,
    <Link to="/U18F">U18F</Link>,
    <Link to="/U18G">U18G</Link>,
    <Link to="/U15F1">U15F1</Link>,
    <Link to="/U15F2">U15F2</Link>,
    <Link to="/U13F1">U13F1</Link>,
    <Link to="/U13F2">U13F2</Link>,
    <Link to="/U13G">U13G</Link>,
  ];
  const formationMenus = [
    <Link to="/Mini">Mini</Link>,
    <Link to="/Baby">Baby</Link>,
    <Link to="/loisir">loisir</Link>,
  ];
  return (
    <STableAmateurTeam>
      <div className="table">
        <div className="divisions">
          <h2>NATIONAL</h2>
          <ul>
            {nationalMenus.map((nationalMenu) => (
              <li>{nationalMenu}</li>
            ))}
          </ul>
        </div>
        <div className="divisions">
          <h2>TERRITORIAL</h2>
          <ul>
            {territorialMenus.map((territorialMenu) => (
              <li>{territorialMenu}</li>
            ))}
          </ul>
        </div>
        <div className="divisions">
          <h2>FORMATION</h2>
          <ul>
            {formationMenus.map((formationMenu) => (
              <li>{formationMenu}</li>
            ))}
          </ul>
        </div>
      </div>
    </STableAmateurTeam>
  );
}
