import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import CardNews from "@components/CardNews";
import SNewsList from "./style";

export default function NewsList() {
  const { news } = useContext(ctxProvider);

  return (
    <SNewsList>
      {news.map((article) => {
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
