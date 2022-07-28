import PropTypes from "prop-types";
import SCardEvent from "@components/CardEvent/style";

export default function CardEvent({ id, title, text }) {
  return (
    <SCardEvent>
      <div className="timeline">
        <div className={id % 2 === 0 ? "container right" : "container left"}>
          <div className="content">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </SCardEvent>
  );
}
CardEvent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
