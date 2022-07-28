import React, { useContext, useState, useEffect } from "react";
import { DateTime } from "luxon";
import ctxProvider from "@services/context/Ctx";
import boxOffice from "@assets/images/elements/boxOffice.png";
import CounterDetail from "@components/CounterDetail";
import SCounter from "./style";

export default function Counter() {
  const { calendar } = useContext(ctxProvider);
  const [indexOfNextMatch, setIndexOfNextMatch] = useState(-1);

  function hourMinute(hm) {
    return `${DateTime.fromISO(hm)
      .setLocale("fr")
      .toFormat("HH")}H${DateTime.fromISO(hm).setLocale("fr").toFormat("mm")}`;
  }

  function day(dm) {
    return `${DateTime.fromISO(dm)
      .setLocale("fr")
      .toFormat("dd MMMM yyyy")
      .toUpperCase()}`;
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

  if (!calendar.length) {
    return <>*</>;
  }
  return (
    <SCounter
      club1={`${
        calendar[indexOfNextMatch].isHome
          ? "sah-ph"
          : calendar[indexOfNextMatch].opponent
      }`}
      club2={`${
        calendar[indexOfNextMatch].isHome
          ? calendar[indexOfNextMatch].opponent
          : "sah-ph"
      }`}
    >
      <div>
        <h3>PROCHAIN MATCH</h3>
      </div>
      <div className="informations">
        <div className="nextMatch">
          <div className="club club1" />
          <p>VS</p>
          <div className="club club2" />
        </div>
        <div className="dayTime">
          <p>{`${day(calendar[indexOfNextMatch].happenedAt)}`}</p>
          <p>{`${hourMinute(calendar[indexOfNextMatch].happenedAt)}`}</p>
          <p>{`${calendar[indexOfNextMatch].place}`}</p>
        </div>

        <CounterDetail
          dateOfNextMatch={calendar[indexOfNextMatch].happenedAt}
        />
      </div>
      <div className="billetDiv">
        <a href="https://www.sah-ph.fr/billetterie/">
          <img className="boxOffice" src={boxOffice} alt="billeterie" />
        </a>
      </div>
    </SCounter>
  );
}
