import SNavbar from "./style";

export default function Navbar() {
  const clubMenus = [
    "Origine de la Meute",
    "Chefs de Meute",
    "Bergers des louveteaux",
    "Arbitres",
  ];
  const lbeMenus = ["Les Louves", "Calendrier", "Classement"];
  const cfMenus = [
    "Philosophie",
    "Effectif",
    "Vie Quotidienne",
    "Formation",
    "Candidature",
  ];
  const amateurMenus = [
    "N1F",
    "SF3",
    "SG",
    "U18F",
    "U18G",
    "U17F",
    "U15F1",
    "U15F2",
    "U13F1",
    "U13F2",
    "U13G",
    "U11F",
    "U11G",
    "Mini",
    "Baby",
    "Loisir",
  ];
  return (
    <SNavbar>
      <div className="upperNav">
        <ul className="visible">
          <li>Actus</li>
          <li>
            Club
            <ul className="submenu">
              {clubMenus.map((clubMenu) => (
                <li>{clubMenu}</li>
              ))}
            </ul>
          </li>
          <li>
            LBE
            <ul className="submenu">
              {lbeMenus.map((lbeMenu) => (
                <li>{lbeMenu}</li>
              ))}
            </ul>
          </li>
          <li>
            CF
            <ul className="submenu">
              {cfMenus.map((cfMenu) => (
                <li>{cfMenu}</li>
              ))}
            </ul>
          </li>
          <li>
            Amateur
            <ul className="submenu">
              {amateurMenus.map((amateurMenu) => (
                <li>{amateurMenu}</li>
              ))}
            </ul>
          </li>
          <li>Boutique</li>
          <li>Billetterie</li>
        </ul>
      </div>
      <div className="underNav">
        <ul className="visible">
          <li>Ambition 2024</li>
          <li>Partenaires</li>
        </ul>
      </div>
    </SNavbar>
  );
}
