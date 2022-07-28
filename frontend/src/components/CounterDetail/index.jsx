import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import SCounterDetail from "./style";

export default function CounterDetail({ dateOfNextMatch }) {
  const nextMatch = new Date(dateOfNextMatch);
  const [countDown, setCountDown] = useState(nextMatch - new Date().getTime());

  const getReturnValues = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    return [days, hours, minutes];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(getReturnValues(nextMatch - new Date().getTime()));
    }, 1000);

    return () => clearInterval(interval);
  }, [nextMatch]);

  return (
    <SCounterDetail>
      <div className="noMobile">
        <div className="row">
          <p className="numbersCount">{countDown[0]}</p>
          <p>{`${countDown[0] < 2 ? "JOUR" : "JOURS"}`}</p>
        </div>
        <span>-</span>
        <div className="row">
          <p className="numbersCount"> {countDown[1]} </p>
          <p>{`${countDown[1] < 2 ? "HEURE" : "HEURES"}`}</p>
        </div>
        <span>-</span>
        <div className="row">
          <p className="numbersCount"> {countDown[2]} </p>
          <p>{`${countDown[2] < 2 ? "MINUTE" : "MINUTES"}`}</p>
        </div>
      </div>
      <div className="mobile">
        <p>
          <em>{countDown[0]}</em> {`${countDown[0] < 2 ? "JOUR " : "JOURS "}`} -
          <em>{countDown[1]}</em>
          {`${countDown[1] < 2 ? " HEURE " : " HEURES "}`}-{" "}
          <em>{countDown[2]}</em>
          {`${countDown[2] < 2 ? " MINUTE" : " MINUTES"}`}
        </p>
      </div>
    </SCounterDetail>
  );
}

CounterDetail.propTypes = {
  dateOfNextMatch: PropTypes.string.isRequired,
};
