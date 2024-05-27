import { Outlet } from "react-router-dom";

import Banner from "./../../components/Banner";
import Footer from "./../../components/Footer";
import Header from "./../../components/Header";

const RootLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
