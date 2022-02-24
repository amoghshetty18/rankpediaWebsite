import React from "react";
import { Link } from "gatsby";

import logoB from "../../assets/image/logo-main-black.png";
import logoW from "../../assets/image/logo-main-white.png";

const Logo = ({ className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {/* <!-- light version logo (logo must be black)--> */}
      {/* <img src={logoW} alt="" className="light-version-logo" id="lgs-frsdt-mbds" /> */}
      <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643726225/new-logo-PNG_1_gooxgt.png" alt="" className="light-version-logo" id="lgs-frsdt-mbds" />
      {/* <!-- Dark version logo (logo must be White)--> */}
      {/* <img src={logoW} alt="" className="dark-version-logo" /> */}
      <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643726225/new-logo-PNG_1_gooxgt.png" alt="" className="dark-version-logo" />
    </Link>
  );
};

export default Logo;
