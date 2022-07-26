import PropTypes from "prop-types";
import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import SBigPicture from "./style";

export default function BigPicture({
  img,
  date,
  hour,
  club1Img,
  club2Img,
  text,
}) {
  const { news } = useContext(ctxProvider);

  function textShort(content) {
    return content.slice(1, 90);
  }

  return (
    <SBigPicture
      img={img}
      date={date}
      hour={hour}
      club1Img={club1Img}
      club2Img={club2Img}
    >
      <div className={`${text === "" ? "none" : "blocInfo"}`}>
        <h3>FIL INFOS</h3>
        {news.slice(1, 4).map((article) => {
          return (
            <>
              <h6 key={article.id}>{article.title}</h6>
              <p key={article.id}>{textShort(`${article.content}`)}</p>
            </>
          );
        })}
      </div>
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
  club1Img: PropTypes.string.isRequired,
  club2Img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
