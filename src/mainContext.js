import React, { useState } from "react";

const MainContext = React.createContext([{}, () => {}]);

const MainContextProvider = props => {
  const [state, setState] = useState({ id: null, info: { name: null } });

  return (
    <MainContext.Provider value={[state, setState]}>
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
