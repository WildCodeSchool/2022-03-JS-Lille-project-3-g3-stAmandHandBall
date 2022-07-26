import PropTypes from "prop-types";
import { useTimer } from "react-timer-hook";
import SCounterDetail from "./style";

export default function CounterDetail({ dateOfNextMatch }) {
  const nextMatch = new Date(dateOfNextMatch);
  const today = new Date();

  const diffOfDates = (nextMatch - today) / 1000;

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + diffOfDates);

  const { minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  return (
    <SCounterDetail>
      <div className="noMobile">
        <div className="row">
          <p className="numbersCount">{days}</p>
          <p>{`${days < 2 ? "JOUR" : "JOURS"}`}</p>
        </div>
        <span>-</span>
        <div className="row">
          <p className="numbersCount"> {hours} </p>
          <p>{`${hours < 2 ? "HEURE" : "HEURES"}`}</p>
        </div>
        <span>-</span>
        <div className="row">
          <p className="numbersCount"> {minutes} </p>
          <p>{`${minutes < 2 ? "MINUTE" : "MINUTES"}`}</p>
        </div>
      </div>
      <div className="mobile">
        <p>
          <em>{days}</em> {`${days < 2 ? "JOUR " : "JOURS "}`} -<em>{hours}</em>
          {`${hours < 2 ? " HEURE " : " HEURES "}`}- <em>{minutes}</em>
          {`${minutes < 2 ? " MINUTE" : " MINUTES"}`}
        </p>
      </div>
    </SCounterDetail>
  );
}

CounterDetail.propTypes = {
  dateOfNextMatch: PropTypes.string.isRequired,
};
