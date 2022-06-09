import PropTypes from "prop-types";
import SCardEvent from "@components/CardEvent/style";

export default function CardEvent({ id, date, text }) {
  return (
    <SCardEvent>
      <div className="timeline">
        <div className={id % 2 === 0 ? "container right" : "container left"}>
          <div className="date">{date}</div>
          <div className="content">
            <h2>TITRE ???</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </SCardEvent>
  );
}
CardEvent.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
