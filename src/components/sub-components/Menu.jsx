/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MenuItems from "./MenuItems";

const Menu = ({ menuItemContent, href }) => {
  return (
    <>
      <ul className="flex gap-5">
        <MenuItems menuItemContent="Home" href="home" />
        <MenuItems menuItemContent="Services" href="services" />
        <MenuItems menuItemContent="FAQ" href="faq" />
        <MenuItems menuItemContent="About Us" href="aboutUs" />
        <MenuItems menuItemContent="Contact us" href="contactUs" />
      </ul>
    </>
  );
};

export default Menu;
