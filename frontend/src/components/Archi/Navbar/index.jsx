import { useState } from "react";
import Burger from "@components/Archi/Burger";
import SNavbar from "./style";

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

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
  return (
    <SNavbar>
      <Burger className="burger" burger={burgerOpen} func={toggleBurger} />
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
          <li>Amateur</li>
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
