import PropTypes from "prop-types";
import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import CardNews from "@components/CardNews";
import SNewsList from "./style";

export default function NewsList({ info }) {
  const { news } = useContext(ctxProvider);
<<<<<<< HEAD
=======

  function number() {
    if (info === "noLast") {
      return 1;
    }
    return 0;
  }

>>>>>>> dev
  return (
    <SNewsList>
      {news.slice(number(), news.length).map((article) => {
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
  );
}

NewsList.propTypes = {
  info: PropTypes.string.isRequired,
};
