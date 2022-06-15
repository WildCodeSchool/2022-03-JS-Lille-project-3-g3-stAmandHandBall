import PropTypes from "prop-types";
import SBigPicture from "./style";

export default function BigPicture({ img, date, hour, club1, club2 }) {
  return (
    <SBigPicture img={img} date={date} hour={hour} club1={club1} club2={club2}>
      <div className={`${date === "" ? "none" : "calendar"}`}>
        <h2>PROCHAIN MATCH</h2>
        <div className="meeting">
          <div className="club1" />
          <div className="dash" />
          <div className="club2" />
        </div>
        <div className="informations">
          <div className="date">
            <h3>{date}</h3>
            <h3>{hour}</h3>
          </div>
          <div className="info">
            <h3>
              BILLETTERIE <br />A PARTIR DE 6€
            </h3>
          </div>
        </div>
      </div>
    </SBigPicture>
  );
}

BigPicture.propTypes = {
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  club1: PropTypes.string.isRequired,
  club2: PropTypes.string.isRequired,
};
