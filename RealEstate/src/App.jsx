import { useRoutes } from "react-router-dom";
import "./App.css";
import routs from "./routs";
import Navbar from "./componant/Navbar/Navbar";
import ContactUs from "./componant/ContactUs/ContactUs";

function App() {
  let rout = useRoutes(routs);
  return <>
  <Navbar/>
  <ContactUs/>
  {rout}</>;
}

export default App;
