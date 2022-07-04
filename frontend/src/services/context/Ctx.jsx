import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ctxProvider = createContext();
export default ctxProvider;

export function CtxProvider({ children }) {
  const [test, setTest] = useState();
  const [players, setPlayers] = useState([]);
  const [calendar, setCalendar] = useState([]);

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

  return (
    <ctxProvider.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        test,
        setTest,
        players,
        calendar,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
