/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const menuItem = ({ href, menuItemContent }) => {
  return (
    <>
      <li>
        <Link to={href} className="font-Roboto text-primary text-lg">
          {menuItemContent}
        </Link>
      </li>
    </>
  );
};

export default menuItem;
