import { useRoutes } from "react-router-dom";
import "./App.css";
import routs from "./routs";
import Navbar from "./componant/Navbar/Navbar";
import ContactUs from "./componant/ContactUs/ContactUs";
import About from "./page/About/About";
// import Migration from "./page/Migration/Migration";
import Homepage from "./page/Homepage/Homepage";
import BusinessRelocation from "./page/BusinessRelocation/BusinessRelocation";

function App() {
  let rout = useRoutes(routs);
  return <>
  <BusinessRelocation/>
  {rout}</>;
}

export default App;
