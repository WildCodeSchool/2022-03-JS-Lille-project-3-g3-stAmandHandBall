import { createContext, useState } from "react";
import PropTypes from "prop-types";

const context = createContext(null);
export default context;
export function CtxProvider({ children }) {
  const [test, setTest] = useState();
  return (
    <context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        test,
        setTest,
      }}
    >
      {children}
    </context.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
