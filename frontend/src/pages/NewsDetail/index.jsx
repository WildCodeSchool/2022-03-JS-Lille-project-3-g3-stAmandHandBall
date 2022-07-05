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

  function date(dm) {
    return `${DateTime.fromISO(dm)
      .setLocale("fr")
      .toFormat("dd MMM")
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
        <p className="date">{`${date(newsDetail.happenedAt)}`}</p>
        <h3>{newsDetail.subTitle}</h3>
        <div className="bloc">
          <img
            src={`../../src/assets/images/photos/${newsDetail.img}`}
            alt="detail of article"
          />
          <h4>{newsDetail.content}</h4>
        </div>
      </SNewsDetail>
      <Title title="Précédentes actus" />

      <SNewsList>
        {news.slice(0, 3).map((article) => {
          return (
            <CardNews
              key={article.id}
              id={article.id}
              title={article.title}
              img={article.img}
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
