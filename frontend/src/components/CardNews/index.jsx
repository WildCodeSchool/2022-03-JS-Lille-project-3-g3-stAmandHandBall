import PropTypes from "prop-types";
import SCardNews from "./style";

export default function CardNews({ title, text, img }) {
  return (
    <SCardNews>
      <div className="mainCards">
        <div className="title">{title}</div>
        <img src={img} alt="imgNews" />
        <div className="text">{text}</div>
      </div>
    </SCardNews>
  );
}

CardNews.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
