import { DateTime } from "luxon";
import { useContext, useState, useEffect } from "react";
import ctxProvider from "@services/context/Ctx";
import CardCalendar from "@components/CardCalendar";
import Title from "@components/Archi/Title";
import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import SCalendar from "./style";

export default function Calendar() {
  const { calendar } = useContext(ctxProvider);
  const [indexOfNextMatch, setIndexOfNextMatch] = useState(0);
  const [uniquePeriod, setUniquePeriod] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function hourMinute(hm) {
    return `${DateTime.fromISO(hm)
      .setLocale("fr")
      .toFormat("HH")}H${DateTime.fromISO(hm).setLocale("fr").toFormat("mm")}`;
  }
  function dayMonth(dm) {
    return `${DateTime.fromISO(dm)
      .setLocale("fr")
      .toFormat("dd MMM")
      .toUpperCase()}`;
  }
  function monthYear(my) {
    return `${DateTime.fromISO(my)
      .setLocale("fr")
      .toFormat("MMMM yyyy")
      .toUpperCase()}`;
  }
  function unique() {
    const array = [];
    for (let i = 0; i < calendar.length; i += 1) {
      array.push(monthYear(calendar[i].happenedAt));
    }
    setUniquePeriod([...new Set(array)]);
  }
  function searchIndexOfNextMatch() {
    const today = DateTime.now();
    let shortestTime = 1000000000;
    let index = 0;
    for (let i = 0; i < calendar.length; i += 1) {
      const date = DateTime.fromISO(calendar[i].happenedAt);
      const diffInMinutes = date.diff(today, "minutes").toObject();
      while (
        diffInMinutes.minutes < shortestTime &&
        diffInMinutes.minutes > 0
      ) {
        shortestTime = diffInMinutes.minutes;
        index = i;
      }
    }
    setIndexOfNextMatch(index);
  }

  useEffect(searchIndexOfNextMatch, [calendar]);
  useEffect(unique, [calendar]);

  if (!calendar.length) {
    return <>*</>;
  }
  return (
    <>
      <BigPicture
        img="test"
        date={`${dayMonth(calendar[indexOfNextMatch].happenedAt)}`}
        hour={`${hourMinute(calendar[indexOfNextMatch].happenedAt)}`}
        club1Img={`${
          calendar[indexOfNextMatch].isHome
            ? "sah.png"
            : calendar[indexOfNextMatch].logo
        }`}
        club2Img={`${
          calendar[indexOfNextMatch].isHome
            ? calendar[indexOfNextMatch].logo
            : "sah.png"
        }`}
        text=""
      />
      <BigTitle title="CALENDRIER DES LOUVES" />
      <SCalendar>
        {uniquePeriod.map((period) => {
          return (
            <div key={period} className="period">
              <Title title={period} />
              {calendar
                .filter((match) => monthYear(match.happenedAt) === period)
                .map((match) => {
                  return (
                    <div key={match.id}>
                      <CardCalendar
                        day={match.day}
                        cup={`${
                          match.day > 0
                            ? "ligue-butagaz.png"
                            : "coupe-de-france.png"
                        }`}
                        date={`${dayMonth(match.happenedAt)}`}
                        hour={`${hourMinute(match.happenedAt)}`}
                        place={`${match.isHome ? "domicile" : "exterieur"}`}
                        club1={`${match.isHome ? "SAH-PH" : match.opponent}`}
                        club2={`${match.isHome ? match.opponent : "SAH-PH"}`}
                        club1Img={`${match.isHome ? "sah-ph.png" : match.logo}`}
                        club2Img={`${match.isHome ? match.logo : "sah-ph.png"}`}
                        result={`${match.result === null ? "-" : match.result}`}
                        news={match.news_id}
                      />
                    </div>
                  );
                })}
            </div>
          );
        })}
      </SCalendar>
    </>
  );
}
