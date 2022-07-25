import PropTypes from "prop-types";
import SCardPlayer from "@components/CardPlayer/style";

export default function CardPlayer({
  name,
  number,
  img,
  captain,
  position,
  matchPlayed,
  goal,
  goalAverage,
  stop,
  penalty,
}) {
  return (
    <SCardPlayer>
      <div className="number">
        <p>#{number}</p>
      </div>
      <div className="image">
        <img src={img} alt="players" />
        <div className="informations">
          <h3 className={captain ? "" : "none"}>Capitaine</h3>
          <h3 className="position">{position}</h3>
          <p>Matchs : {matchPlayed}</p>
          <p>Buts marqués : {goal}</p>
          <p>Moyenne de buts : {goalAverage}</p>
          <p className={position === "Gardienne" ? "" : "none"}>
            Arrêts : {stop}
          </p>
          <p className={position === "Gardienne" ? "" : "none"}>
            Jets de 7 mètres : {penalty}
          </p>
        </div>
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
    </SCardPlayer>
  );
}

CardPlayer.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
  img: PropTypes.string,
  position: PropTypes.string,
  captain: PropTypes.number,
  matchPlayed: PropTypes.number,
  goal: PropTypes.number,
  goalAverage: PropTypes.number,
  stop: PropTypes.number,
  penalty: PropTypes.number,
};

CardPlayer.defaultProps = {
  number: 0,
  img: "",
  position: "",
  captain: 0,
  matchPlayed: 0,
  goal: 0,
  goalAverage: 0,
  stop: 0,
  penalty: 0,
};
