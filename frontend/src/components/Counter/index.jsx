import React from "react";
import { useTimer } from "react-timer-hook";
import boxOffice from "@assets/boxOffice.png";
import sah from "@assets/images/logos/clubs/sah.png";
// import logoSah from "@assets/Logo_SAH.png";
import SCounter from "./style";

export default function Counter() {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 691200); //  the counter is set hard for the moment by mandatory conversion to seconds to program the timer

  const { minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  return (
    <SCounter>
      <div>
        <h3>PROCHAIN MATCH</h3>
      </div>

      <ul className="nextMatch">
        <img src={sah} alt="équipe à l'extérieur" />
        <li>VS</li>
        <img src={sah} alt="équipe à l'extérieur" />
        {/* <img src={logoSah} alt="équipe à l'extérieur" />
        <li>VS</li>
        <img src={logoSah} alt="équipe à l'extérieur" /> */}
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
          <img className="boxOffice" src={boxOffice} alt="billeterie" />
        </a>
      </div>
    </SCounter>
  );
}
