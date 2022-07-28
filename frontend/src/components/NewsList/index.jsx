import PropTypes from "prop-types";
import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import CardNews from "@components/CardNews";
import SNewsList from "./style";

export default function NewsList({ info }) {
  const { news } = useContext(ctxProvider);
  function number() {
    if (info === "noLast") {
      return 1;
    }
    return 0;
  }

  return (
    <SNewsList>
      {news.slice(number(), news.length).map((article) => {
        return (
          <CardNews
            key={article.id}
            id={article.id}
            title={article.title}
            img1={article.img1}
            img2={article.img2}
            img3={article.img3}
            img4={article.img4}
            img5={article.img5}
            img6={article.img6}
            content={article.content}
          />
        );
      })}
    </SNewsList>
  );
}

NewsList.propTypes = {
  info: PropTypes.string.isRequired,
};
