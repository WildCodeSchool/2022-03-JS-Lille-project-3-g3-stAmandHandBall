import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import { useParams } from "react-router-dom";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import CardStaff from "@components/CardStaff";
import Title from "@components/Archi/Title";
import TitleLink from "@components/Archi/TitleLink";
import CardNews from "@components/CardNews";
import SNewsList from "@components/NewsList/style";
import SNonProfessionalDetail from "./style";

function NonProfessionalDetail() {
  const { news } = useContext(ctxProvider);
  const [teamDetail, setTeamDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/team/"}${id}`)
      .then(({ data }) => {
        setTeamDetail(data);
      });
  }, []);

  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title={teamDetail.title} />
      <SNonProfessionalDetail>
        <div className="cardAndPhoto">
          <CardStaff
            name={`${teamDetail.firstname} ${teamDetail.lastname}`}
            img={`../../src/assets/images/cards/staff/${teamDetail.staffImg}`}
          />
          <img
            className="teamImg"
            src={`../../src/assets/images/photos/${teamDetail.img}`}
            alt="detail of article"
          />
        </div>
        <TitleLink
          title="CALENDRIER ET RÉSULTATS"
          link="www.https://www.ffhandball.fr/fr/competition/17757#poule-105861"
        />
      </SNonProfessionalDetail>
      <SNewsList>
        <Title title="ARTICLES RÉCAPITULATIFS" />
        {news
          .filter((article) => article.team_id === id)
          .map((article) => {
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
    </>
  );
}

export default NonProfessionalDetail;
