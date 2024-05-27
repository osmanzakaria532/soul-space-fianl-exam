/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Button = ({ className, Children }) => {
  return (
    <>
      <Link to="#" className={className}>
        {Children}
      </Link>
    </>
  );
};

export default Button;
