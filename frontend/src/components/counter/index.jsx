import React from "react";
import PropTypes from "prop-types";
import { useTimer } from "react-timer-hook";
import SMyTimer from "./style";

function MyTimer({ expiryTimestamp }) {
  const { minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <SMyTimer>
      <div>
        <h2>PROCHAIN MATCH</h2>
      </div>

      <ul className="nextMatch">
        <li>SAH</li>
        <li>VS</li>
        <li>HAC</li>
      </ul>
      <ul className="dayTime">
        <li className="day">J1 </li>
        <p>SAMEDI 3 SEPTEMBRE</p>
        <p>19H30</p>
        <p>SALLE MAURICE HUGOT</p>
      </ul>
      <div className="timer">
        <ul>
          <li className="numbersCount"> {days} </li>
          <li>Jours</li>
        </ul>
        <span>-</span>
        <ul>
          <li className="numbersCount"> {hours} </li>
          <li>heure</li>
        </ul>
        <span>-</span>
        <ul>
          <li className="numbersCount"> {minutes} </li>
          <li>minute</li>
        </ul>
      </div>
      <h3>BILLETERIE</h3>
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
