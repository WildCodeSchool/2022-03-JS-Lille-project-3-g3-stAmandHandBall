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
      <div className="counter">
        <h1>PROCHAIN MATCH </h1>
        <div className="timerGlobal">
          <div className="timer">
            <span> {days} JOURS </span> <span>{hours} HEURES</span>
            <span> {minutes} MINUTES</span>
          </div>
        </div>
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
