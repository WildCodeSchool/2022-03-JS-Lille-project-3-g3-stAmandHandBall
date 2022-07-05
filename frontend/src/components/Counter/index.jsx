import React from "react";
import { useTimer } from "react-timer-hook";
import boxOffice from "@assets/images/elements/boxOffice.png";
import SCounter from "./style";

export default function Counter() {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 691200); //  the counter is set hard for the moment by mandatory conversion to seconds to program the timer

  const { minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  return (
    <SCounter club1="TOULON" club2="SAH-PH">
      <div>
        <h3>PROCHAIN MATCH</h3>
      </div>
      <div className="informations">
        <div className="nextMatch">
          <div className="club club1" />
          <p>VS</p>
          <div className="club club2" />
        </div>

        <div className="dayTime">
          <p className="day">J1 </p>
          <p>SAMEDI 3 SEPTEMBRE</p>
          <p>19H30</p>
          <p>SALLE MAURICE HUGOT</p>
        </div>

        <div className="timer">
          <div className="row">
            <p className="numbersCount"> {days} </p>
            <p>JOURS</p>
          </div>
          <span>-</span>
          <div className="row">
            <p className="numbersCount"> {hours} </p>
            <p>HEURES</p>
          </div>
          <span>-</span>
          <div className="row">
            <p className="numbersCount"> {minutes} </p>
            <p>MINUTES</p>
          </div>
        </div>
      </div>

      <div className="billetDiv">
        <a href="https://www.sah-ph.fr/billetterie/">
          <img className="boxOffice" src={boxOffice} alt="billeterie" />
        </a>
      </div>
    </SCounter>
  );
}
