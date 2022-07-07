import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import { Link } from "react-router-dom";
import SCardNewsBig from "./style";

export default function CardNewsBig() {
  const { news } = useContext(ctxProvider);

  return (
    <SCardNewsBig>
      <div className="mainCards">
        <Link to={`/actus/${news[0].id}`}>
          <img
            src={`../../src/assets/images/photos/${news[0].img}`}
            alt="imgNews"
          />
        </Link>
        <div className="text">
          <div className="textContainer">
            <h2>{news[0].title}</h2>
            <div className="size">
              <p>{news[0].content}</p>
            </div>
          </div>
        </div>
      </div>
    </SCardNewsBig>
  );
}
