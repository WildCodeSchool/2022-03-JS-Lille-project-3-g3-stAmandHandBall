import React from "react";
import PropTypes from "prop-types";
import { useTimer } from "react-timer-hook";
import billeterie from "@assets/billeterie.png";
import logoSah from "@assets/Logo_SAH.png";
import SMyTimer from "./style";

function MyTimer({ expiryTimestamp }) {
  const { minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <SMyTimer>
      <div>
        <h3>PROCHAIN MATCH</h3>
      </div>

      <ul className="nextMatch">
        <img src={logoSah} alt="équipe à l'extérieur" />
        <li>VS</li>
        <img src={logoSah} alt="équipe à l'extérieur" />
      </ul>
      <ul className="dayTime">
        <li>J1 </li>
        <p>SAMEDI 3 SEPTEMBRE</p>
        <p>19H30</p>
        <p>SALLE MAURICE HUGOT</p>
      </ul>
      <div className="timer">
        <ul>
          <li className="numbersCount"> {days} </li>
          <li>JOURS</li>
        </ul>
        <span>-</span>
        <ul>
          <li className="numbersCount"> {hours} </li>
          <li>HEURES</li>
        </ul>
        <span>-</span>
        <ul>
          <li className="numbersCount"> {minutes} </li>
          <li>MINUTES</li>
        </ul>
      </div>
      <div className="billetDiv">
        <a href="https://www.sah-ph.fr/billetterie/">
          <img className="billeterie" src={billeterie} alt="billeterie" />
        </a>
      </div>
    </SMyTimer>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 691200); // 8 jours : obligation de convertir la durée en secondes, mais pb quand actualisation de la page
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
MyTimer.propTypes = {
  expiryTimestamp: PropTypes.string.isRequired,
};
