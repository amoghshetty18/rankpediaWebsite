import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import Menu from "./Menu";
import NestedMenu from "../NestedMenu";
import Logo from "../Logo";

const SiteHeader = styled.header``;

const ToggleButton = styled.button``;

const Header = () => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <>
      <SiteHeader
        className={`site-header ${
          gContext.theme.headerClassName
        } px-7 px-lg-10 dynamic-sticky-bg site-header--absolute site-header--sticky

        ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header " : ""
        }`}
      >
        <div className="header-menu-container-earlier">
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0" id="header-nav">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo mt-3 mt-md-0" id="rank-lgstr-vuag">
              <Logo />
            </div>

            <div className="collapse navbar-collapse">
              <div className="navbar-nav-wrapper">
                <Menu />
              </div>
            </div>

            {/* {gContext.theme.headerButton && (
              <div className="header-btn ml-auto ml-lg-0 d-none d-xs-block">
                {gContext.theme.headerButton}
              </div>
            )} */}

            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={gContext.theme.headerDark ? 1 : 0}
            >
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </div>
      </SiteHeader>
      <div className="d-block d-lg-none">
        <Offcanvas
          show={gContext.visibleOffCanvas}
          onHideOffcanvas={gContext.toggleOffCanvas}
        >
          <NestedMenu />
        </Offcanvas>
      </div>

      <div id="popup1" class="overlay">
                  <div class="popup">
                    
                    <a class="close" href="#">&times;</a>
                    <img src="./image/l4/png/crown1.png" class="popup-crown" />

                    <h2>QuizWizz</h2>
                    <div class="">
                      <p class="popup-para">Enter your details below to lorem ipsum Sed ut perspiciatis unde</p>

                      <form action="" id="rmdts">
                        <label class="firstname" for="fname">Student name</label><br />
                        <input type="text" class="plchldr" name="fname" placeholder="eg. John Doe" /><br/>
                        <label class="firstname" for="fname">School name</label><br/>
                        <input type="text" class="plchldr" name="fname" placeholder="eg. Hogwarts Public School"/><br/>
                        <label class="firstname" for="fname">Grade</label><br/>
                        <select id="cars" name="cars">
                          <option value="volvo">Class 8</option>
                          <option value="saab">Class 9</option>
                          <option value="fiat">Class 10</option>
                        </select>
                        <input class="pop-submit" type="submit" value="Submit" />
                      </form> 

                    </div>
                  </div>
                </div>
    </>
  );
};
export default Header;
