import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SCardNews from "./style";

export default function CardNews({ title, content, img, id }) {
  return (
    <SCardNews>
      <div className="mainCards">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <Link to={`/actus/${id}`}>
          <img src={`../../src/assets/images/photos/${img}`} alt="imgNews" />
        </Link>
        <div className="text">{content}</div>
      </div>
    </SCardNews>
  );
}

CardNews.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
