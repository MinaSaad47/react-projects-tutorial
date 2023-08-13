import useNavigator from "../hooks/use-navigator";

function Route({ path, children }) {
  const { currentPath } = useNavigator();
  if (currentPath !== path) {
    return null;
  }
  return children;
}

export default Route;
