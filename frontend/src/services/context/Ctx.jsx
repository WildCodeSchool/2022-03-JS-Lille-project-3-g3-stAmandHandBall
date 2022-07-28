import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ctxProvider = createContext();
export default ctxProvider;

export function CtxProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [staff, setStaff] = useState([]);
  const [news, setNews] = useState([]);
  const [team, setTeam] = useState([]);
  const [role, setRole] = useState([]);
  const [referee, setReferee] = useState([]);
  const [opponent, setOpponent] = useState([]);
  const [history, setHistory] = useState([]);
  const [nonProfessionnal, setNonProfessionnal] = useState([]);
  const [newsTeam, setNewsTeam] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/players"}`)
      .then(({ data }) => {
        setPlayers(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/history"}`)
      .then(({ data }) => {
        setHistory(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/calendar"}`)
      .then(({ data }) => {
        setCalendar(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/news"}`)
      .then(({ data }) => {
        setNews(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/role"}`)
      .then(({ data }) => {
        setRole(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/referee"}`)
      .then(({ data }) => {
        setReferee(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/opponent"}`)
      .then(({ data }) => {
        setOpponent(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/role/staff/"}`)
      .then(({ data }) => {
        setStaff(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/news/team"}`)
      .then(({ data }) => {
        setNewsTeam(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/team"}`)
      .then(({ data }) => {
        setNonProfessionnal(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/referee/role"}`)
      .then(({ data }) => {
        setReferee(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/team/staff"}`)
      .then(({ data }) => {
        setTeam(data);
      });
  }, []);

  return (
    <ctxProvider.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        players,
        calendar,
        history,
        setPlayers,
        staff,
        news,
        team,
        referee,
        opponent,
        role,
        nonProfessionnal,
        newsTeam,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
