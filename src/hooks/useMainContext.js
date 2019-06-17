import { useContext } from "react";
import { MainContext } from "../mainContext";

const useMainContext = () => {
  const [state, setState] = useContext(MainContext);

  const setId = id => {
    setState(state => ({ ...state, id: id }));
  };

  const setInfo = info => {
    setState(state => ({ ...state, info: info }));
  };

  return {
    id: state.id,
    setId,
    info: state.info,
    setInfo
  };
};

export default useMainContext;
