import PropTypes from "prop-types";
import SCardCalendar from "@components/CardCalendar/style";
import Title from "@components/Archi/Title";
import domicile from "@assets/images/elements/maison.png";
import exterieur from "@assets/images/elements/avion.png";

export default function CardCalendar({
  day,
  cup,
  date,
  hour,
  place,
  club1,
  club2,
  club1Img,
  club2Img,
  result,
}) {
  const linkTicketOffice = "https://pba.lille.fr/Agenda/La-Foret-Magique2";
  const linkActuality = "http://localhost:3000/actus";

  return (
    <SCardCalendar club1Img={club1Img} club2Img={club2Img} day={day}>
      <div className="firstPart">
        <div className={`${day > 0 ? "day" : "none"}`}>
          <h3>J{day}</h3>
        </div>
        <img
          src={`../../src/assets/images/logos/${cup}`}
          alt="cup"
          className={`${day > 0 ? "cup dayJ" : "cup noDayJ"}`}
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
      </div>
      <div className="result">
        <div className="meeting">
          <div className="firstClub">
            <h3>{club1}</h3>
            <div className="club club1" />
          </div>
          <h3>{result}</h3>
          <div className="secondClub">
            <div className="club club2" />
            <h3>{club2}</h3>
          </div>
        </div>
        <a
          href={`${result.length < 5 ? linkTicketOffice : linkActuality}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="link">
            <Title
              title={result.length < 5 ? "BILLETTERIE" : "RECAP DU MATCH"}
            />
          </div>
        </a>
      </div>
    </SCardCalendar>
  );
}

CardCalendar.propTypes = {
  day: PropTypes.number.isRequired,
  cup: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  club1: PropTypes.string.isRequired,
  club2: PropTypes.string.isRequired,
  club1Img: PropTypes.string.isRequired,
  club2Img: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
