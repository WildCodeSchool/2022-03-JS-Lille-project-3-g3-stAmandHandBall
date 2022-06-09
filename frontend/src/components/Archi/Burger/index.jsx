import PropTypes from "prop-types";
import SBurger from "./style";

export default function Burger({ ...props }) {
  const stopPropa = (evt) => {
    evt.stopPropagation();
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
    <SBurger isOpen={props.burger} onClick={props.func}>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>
      <div className="Nav">
        <ul>
          <li>Actus</li>
          <li>
            <details>
              <summary onClick={stopPropa}>Club</summary>
              <ul className="subMenu">
                {clubMenus.map((clubMenu) => (
                  <li>{clubMenu}</li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary onClick={stopPropa}>LBE</summary>
              <ul className="subMenu">
                {lbeMenus.map((lbeMenu) => (
                  <li>{lbeMenu}</li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary onClick={stopPropa}>CF</summary>
              <ul className="subMenu">
                {cfMenus.map((cfMenu) => (
                  <li>{cfMenu}</li>
                ))}
              </ul>
            </details>
          </li>
          <li>Amateur</li>
          <li>Boutique</li>
          <li>Billetterie</li>
          <li>Ambition 2024</li>
          <li>Partenaires</li>
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
