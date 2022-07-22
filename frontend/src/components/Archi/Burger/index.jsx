import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SBurger from "./style";

export default function Burger({ ...props }) {
  const stopPropa = (evt) => {
    evt.stopPropagation();
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
    <SBurger isOpen={props.burger} onClick={props.func}>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>
      <div className="Nav">
        <ul>
          <li>
            <Link className="linkColor" to="actus">
              Actus
            </Link>
          </li>
          <li>
            <details>
              <summary onClick={stopPropa}>Club</summary>
              <ul className="subMenu">
                {clubMenus.map((clubMenu) => (
                  <li>
                    <Link className="aColor" to={clubMenu.target}>
                      {clubMenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary onClick={stopPropa}>LBE</summary>
              <ul className="subMenu">
                {lbeMenus.map((lbeMenu) => (
                  <li>
                    <Link className="aColor" to={lbeMenu.target}>
                      {lbeMenu.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    className="aColor"
                    href="https://www.wordreference.com/fren/effectif"
                  >
                    classement
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary onClick={stopPropa}>CF</summary>
              <ul className="subMenu">
                {cfMenus.map((cfMenu) => (
                  <li>
                    <Link className="aColor" to={cfMenu.target}>
                      {cfMenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <Link className="linkColor" to="amateurs">
              Amateur
            </Link>
          </li>
          <li>
            <Link className="linkColor" to="boutique">
              Boutique
            </Link>
          </li>
          <li>
            <Link className="linkColor" to="billetterie">
              Billetterie
            </Link>
          </li>
          <li>
            <Link className="linkColor" to="ambitions">
              Ambitions 2024
            </Link>
          </li>
          <li>
            <Link className="linkColor" to="partenaires">
              Partenaires
            </Link>
          </li>
        </ul>
      </div>
    </SBurger>
  );
}
Burger.propTypes = {
  burger: PropTypes.bool,
  func: PropTypes.func,
};
Burger.defaultProps = {
  burger: false,
  func: () => {},
};
