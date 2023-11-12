import { useRoutes } from "react-router-dom";
import "./App.css";
import routs from "./routs";
import Navbar from "./componant/Navbar/Navbar";
import ContactUs from "./componant/ContactUs/ContactUs";
import About from "./page/About/About";

function App() {
  let rout = useRoutes(routs);
  return <>
  <Navbar/>
  <About/>
  <div className="bg-color3 py-20 text-center">Why We Do It – Our Values</div>
  <ContactUs/>
  {rout}</>;
}

export default App;
