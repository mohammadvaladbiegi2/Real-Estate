import About from "./page/About/About";
import BusinessRelocation from "./page/BusinessRelocation/BusinessRelocation";
import FamilyRelocation from "./page/FamilyRelocation/FamilyRelocation";
import GeneralDisclaimer from "./page/GeneralDisclaimer/GeneralDisclaimer";
import Homepage from "./page/Homepage/Homepage";
import InvestmentOpportunities from "./page/InvestmentOpportunities/InvestmentOpportunities";
import Services from "./page/Services/Services";
import Migration from "./page/migration/migration";

const routs = [
  { path: "/", element: <Homepage /> },
  { path: "/about", element: <About /> },
  { path: "/businessRelocation", element: <BusinessRelocation /> },
  { path: "/familyRelocation", element: <FamilyRelocation /> },
  { path: "/generalDisclaimer", element: <GeneralDisclaimer /> },
  { path: "/investmentOpportunities", element: <InvestmentOpportunities /> },
  { path: "/migration", element: <Migration /> },
  { path: "/services", element: <Services /> },
];

export default routs;
