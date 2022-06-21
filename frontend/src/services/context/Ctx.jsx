import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ctxProvider = createContext();
export default ctxProvider;

export function CtxProvider({ children }) {
  const [test, setTest] = useState();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/players").then(({ data }) => {
      setPlayers(data).then(() => {});
    });
  }, []);

  return (
    <ctxProvider.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        test,
        setTest,
        players,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
