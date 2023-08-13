import { useContext } from "react";
import NavigatorContext from "../context/NavigatorContext";

const useNavigator = () => {
  return useContext(NavigatorContext);
};

export default useNavigator;
