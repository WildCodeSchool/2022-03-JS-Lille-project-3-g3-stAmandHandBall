import { Link, useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import SCardNews from "./style";

export default function CardNews({ title, content, img1, id }) {
  const navigate = useNavigate();

  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }

  return (
    <SCardNews>
      <div className="mainCards">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <Link
          to={`/actus/${id}`}
          onClick={() => changeLocation(`/actus/${id}`)}
        >
          <img src={`../../src/assets/images/photos/${img1}`} alt="imgNews" />
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
  img1: PropTypes.string.isRequired,
};
