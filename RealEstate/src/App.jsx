import { useRoutes } from "react-router-dom";
import "./App.css";
import routs from "./routs";
import Navbar from "./componant/Navbar/Navbar";

function App() {
  let rout = useRoutes(routs);
  return (
    <>
      <Navbar />
      {rout}
    </>
  );
}

export default App;
