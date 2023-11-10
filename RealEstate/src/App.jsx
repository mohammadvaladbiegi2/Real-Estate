import { useRoutes } from "react-router-dom";
import "./App.css";
import routs from "./routs";

function App() {
  let rout = useRoutes(routs);
  return <>{rout}</>;
}

export default App;
