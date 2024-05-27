import Logo from "../../src/assets/images/logo.png";
import Menu from "./sub-components/Menu";
import SocialIcons from "./sub-components/SocialIcons";

import Button from "./sub-components/Button";

const Footer = () => {
  return (
    <>
      <div className="bg-white p-16">
        <div className="flex items-center justify-between bg-bgc p-16 rounded-[32px]">
          <img src={Logo} alt="Logo" className="mr-20" />
          <Menu />
        </div>
        <div className="px-16 py-5 bg-bgc rounded-2xl mt-[10px] flex items-center justify-between ">
          <SocialIcons />
          <p className="text-[#6B7280]">
            © 2024 Pigment Agency. All rights reserved.
          </p>
          <Button
            Children="Back To Top"
            className="py-2 px-8 text-primary rounded-[60px] border border-[#6B7280]"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
