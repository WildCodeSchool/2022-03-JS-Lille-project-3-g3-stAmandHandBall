import PropTypes from "prop-types";
import SCardCalendar from "@components/CardCalendar/style";
import Title from "@components/Archi/Title";
import domicile from "@assets/images/elements/maison.png";
import exterieur from "@assets/images/elements/avion.png";

export default function CardCalendar({
  day,
  hit,
  date,
  hour,
  place,
  club1,
  club2,
  result,
}) {
  const linkTicketOffice = "https://pba.lille.fr/Agenda/La-Foret-Magique2";
  const linkActuality = "http://localhost:3000/actus";

  return (
    <SCardCalendar club1={club1} club2={club2} hit={hit}>
      <div className="day">
        <h3>J{day}</h3>
      </div>
      <img
        src={`../../src/assets/images/logos/${hit}.png`}
        alt="hit"
        className="hit"
      />
      <div className="date">
        <img
          src={`${place === "domicile" ? domicile : exterieur}
            `}
          alt="place"
          className="place"
        />
        <p>{date}</p>
        <p>{hour}</p>
      </div>
      <div className="result">
        <div className="meeting">
          <h3>{club1}</h3>
          <div className="club club1" />
          <h3>{result}</h3>
          <div className="club club2" />
          <h3>{club2}</h3>
        </div>
        <a
          href={`${result === "-" ? linkTicketOffice : linkActuality}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="link">
            <Title title={result === "-" ? "BILLETTERIE" : "RECAP DU MATCH"} />
          </div>
        </a>
      </div>
    </SCardCalendar>
  );
}

CardCalendar.propTypes = {
  day: PropTypes.number.isRequired,
  hit: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  club1: PropTypes.string.isRequired,
  club2: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
