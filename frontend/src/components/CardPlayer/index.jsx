import PropTypes from "prop-types";
import SCardPlayer from "@components/CardPlayer/style";

export default function CardPlayer({ name, number, img }) {
  return (
    <SCardPlayer>
      <div className="number">
        <p>#{number}</p>
      </div>
      <div className="image">
        <img src={img} alt="players" />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
    </SCardPlayer>
  );
}

CardPlayer.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
