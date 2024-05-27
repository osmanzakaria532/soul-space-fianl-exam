import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Services from "./pages/Services";
import RootLayout from "./pages/rootdirectory/RootLayout";

const App = () => {
  return (
    <>
      <div className="bg-bgc">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
