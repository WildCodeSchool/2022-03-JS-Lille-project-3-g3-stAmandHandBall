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

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/players"}`)
      .then(({ data }) => {
        setPlayers(data);
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
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/staff"}`)
      .then(({ data }) => {
        setStaff(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/news"}`)
      .then(({ data }) => {
        setNews(data);
      });
  }, []);

  return (
    <ctxProvider.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        players,
        calendar,
        setPlayers,
        staff,
        news,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
