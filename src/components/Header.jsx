import { Link } from "react-router-dom";
import Logo from "../../src/assets/images/logo.png";
import Button from "./sub-components/Button";
import Menu from "./sub-components/Menu";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-8">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="mr-20" />
          </Link>
          <Menu />
        </div>
        <Button
          Children="Login"
          className="py-2 px-8 bg-primary text-white font-medium rounded-[60px]"
        />
      </div>
    </>
  );
};

export default Header;
