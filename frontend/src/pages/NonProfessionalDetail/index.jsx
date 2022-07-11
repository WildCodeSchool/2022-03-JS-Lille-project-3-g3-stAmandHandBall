import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import SNonProfessionalDetail from "./style";

function NonProfessionalDetail() {
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
        <h3>{teamDetail.title}</h3>
      </SNonProfessionalDetail>
    </>
  );
}

export default NonProfessionalDetail;
