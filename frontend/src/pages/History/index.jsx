import CardEvent from "@components/CardEvent";
import SHistory from "./style";

export default function History() {
  const history = [
    { id: 0, date: 1984, text: "Création du HandBall Club Saint-Amand" },
    {
      id: 1,
      date: 2000,
      text: "Après une mise en sommeil de 11 ans, Pierre-Henri Soyez reprend le club",
    },
    {
      id: 2,
      date: 2005,
      text: "L’équipe première féminine accède à la Nationale 3",
    },
    {
      id: 3,
      date: 2010,
      text: "2ème de la poule 2 de N2 avec 18 victoires et seulement 4 défaites, le club accède à la Nationale 1 !",
    },
    {
      id: 4,
      date: 2015,
      text: "1ère place de la poule 2 de Nationale 1 ! Le Club accède à la Division 2 avec un bilan de 20 victoires et 2 défaites !",
    },
    {
      id: 5,
      date: 2018,
      text: "Pour sa 3ème saison en Division 2, le HBCSA-PH est titualire du statut VAP (Voie d’Accès au Professionnalisme). Grâce à ce sésame et sa 3ème place en championnat, le club amandinois monte en 1è division, la LFH !",
    },
    {
      id: 6,
      date: 2019,
      text: "1ère saison en Ligue Féminine de Handball, le HBCSA-PH terminera à la dernière place des playdowns. Les amandinoises réalisent un beau parcours en Coupe de France, se hissant en ¼ de finale, éliminé par Metz.",
    },
    {
      id: 7,
      date: 2020,
      text: "Leader de la poule 1 de Division 2. La saison ne va pas à son terme à cause de la pandémie de COVID-19 : le club amandinois retrouve le haut niveau et la Ligue Butagaz Énergie !",
    },
    { id: 8, date: 2021, text: "Retour D2F ( statut VAP )" },
    {
      id: 9,
      date: 2022,
      text: "Championnes de France de D2F et accession en LBE !",
    },
  ];
  return (
    <SHistory>
      {history.map((event) => {
        return (
          <CardEvent
            className={event.id % 2 === 0 ? "right" : "left"}
            key={event.id}
            id={event.id}
            date={event.date}
            text={event.text}
          />
        );
      })}
    </SHistory>
  );
}
