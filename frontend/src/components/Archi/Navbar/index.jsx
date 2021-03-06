import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "@components/Archi/Burger";
import SNavbar from "./style";

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const clubMenus = [
    { title: "Origine de la Meute", target: "/origineDeLaMeute" },
    { title: "Chefs de Meute", target: "/chefsDeMeute" },
    { title: "Bergers des louveteaux", target: "/bergersDesLouveteaux" },
    { title: "Arbitres", target: "/arbitres" },
  ];

  const lbeMenus = [
    { title: "Les Louves", target: "/equipe" },
    { title: "Calendrier", target: "/calendrier" },
  ];
  const cfMenus = [
    { title: "Philosophie", target: "/philosophie" },
    { title: "Effectif", target: "/effectif" },
    { title: "Vie Quotidienne", target: "/vieQuotidienne" },
    { title: "Formation", target: "/formation" },
    { title: "Candidature", target: "/candidature" },
  ];
  return (
    <SNavbar>
      <Burger className="burger" burger={burgerOpen} func={toggleBurger} />
      <div className="upperNav">
        <ul className="visible">
          <li>
            <Link to="actus">Actus</Link>
          </li>

          <li>
            Club
            <ul className="submenu">
              {clubMenus.map((clubMenu) => (
                <li key={clubMenu.title}>
                  <Link to={clubMenu.target}>{clubMenu.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            D1f
            <ul className="submenu">
              {lbeMenus.map((lbeMenu) => (
                <li key={lbeMenu.title}>
                  <Link to={lbeMenu.target}>{lbeMenu.title}</Link>
                </li>
              ))}
              <li>
                <a href="https://www.ffhandball.fr/fr/competition/19868#poule-107982">
                  classement
                </a>
              </li>
            </ul>
          </li>
          <li>
            CF
            <ul className="submenu">
              {cfMenus.map((cfMenu) => (
                <li key={cfMenu.title}>
                  <Link to={cfMenu.target}>{cfMenu.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="amateurs">Amateur</Link>
          </li>
          <li>
            <Link to="boutique">Boutique</Link>
          </li>
          <li>
            <a href="https://www.sah-ph.fr/billetterie/">Billetterie</a>
          </li>
        </ul>
      </div>
      <div className="underNav">
        <ul className="visible">
          <li>
            <Link to="ambitions">Ambitions 2024</Link>
          </li>
          <li>
            <Link to="partenaires">Partenaires</Link>
          </li>
        </ul>
      </div>
    </SNavbar>
  );
}
