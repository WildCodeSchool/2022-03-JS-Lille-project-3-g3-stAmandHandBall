import axios from "axios";
import { DateTime } from "luxon";
import React, { useContext, useState, useEffect } from "react";
import ctxProvider from "@services/context/Ctx";
import { useParams } from "react-router-dom";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import Counter from "@components/Counter";
import CardNews from "@components/CardNews";
import SNewsList from "@components/NewsList/style";
import SNewsDetail from "./style";

function NewsDetail() {
  const { news } = useContext(ctxProvider);

  const [newsDetail, setNewsDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function date(dm) {
    return `${DateTime.fromISO(dm)
      .setLocale("fr")
      .toFormat("dd MMMM yyyy")
      .toUpperCase()}`;
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/news/"}${id}`)
      .then(({ data }) => {
        setNewsDetail(data);
      });
  }, []);

  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title={newsDetail.title} />
      <SNewsDetail src={newsDetail} className="container">
        <p className="date">{`${date(newsDetail.publishedAt)}`}</p>
        <h3>{newsDetail.subTitle}</h3>
        <div className="bloc">
          <img
            className="firstImg"
            src={`../../src/assets/images/photos/${newsDetail.img1}`}
            alt="detail of article"
          />
          <h4>{newsDetail.content}</h4>
          <div className="photos">
            <img
              className={`${!newsDetail.img2 ? "none" : ""}`}
              src={`../../src/assets/images/photos/${newsDetail.img2}`}
              alt="detail of article 2"
            />
            <img
              className={`${!newsDetail.img3 ? "none" : ""}`}
              src={`../../src/assets/images/photos/${newsDetail.img3}`}
              alt="detail of article 3"
            />
            <img
              className={`${!newsDetail.img4 ? "none" : ""}`}
              src={`../../src/assets/images/photos/${newsDetail.img4}`}
              alt="detail of article 4"
            />
            <img
              className={`${!newsDetail.img5 ? "none" : ""}`}
              src={`../../src/assets/images/photos/${newsDetail.img5}`}
              alt="detail of article 5"
            />
            <img
              className={`${!newsDetail.img6 ? "none" : ""}`}
              src={`../../src/assets/images/photos/${newsDetail.img6}`}
              alt="detail of article 6"
            />
          </div>
        </div>
        <Title title="Précédentes actus" />
      </SNewsDetail>

      <SNewsList>
        {news.slice(0, 3).map((article) => {
          return (
            <CardNews
              key={article.id}
              id={article.id}
              title={article.title}
              img1={article.img1}
              content={article.content}
            />
          );
        })}
      </SNewsList>

      <Counter />
    </>
  );
}

export default NewsDetail;
