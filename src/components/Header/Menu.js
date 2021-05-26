import React, { useState } from "react";
import { Link } from "gatsby";

import { menuItems } from "./menuItems";
import Modal from 'react-modal' 
import QuizWizzPopUp from "./QuizWizzPopUp";
import '../../css/styles.css'

const Menu = () => {

  const [togglePopUp, setTogglePopUp] = useState(false)

  return (
    <>
      <ul className="navbar-nav main-menu d-none d-lg-flex">
        {menuItems.map(
          ({ label, isExternal = false, name, items, ...rest }, index) => {
            const hasSubItems = Array.isArray(items);
            return (
              <React.Fragment key={name + index}>
                {hasSubItems ? (
                  <li className="nav-item dropdown" {...rest}>
                    <a
                      className="nav-link dropdown-toggle gr-toggle-arrow"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {label}
                      <i className="icon icon-small-down"></i>
                    </a>
                    <ul className="gr-menu-dropdown dropdown-menu">
                      {items.map((subItem, indexSub) => {
                        const hasInnerSubItems = Array.isArray(subItem.items);
                        return (
                          <React.Fragment key={subItem.name + indexSub}>
                            {hasInnerSubItems ? (
                              <li className="drop-menu-item dropdown">
                                <a
                                  className="dropdown-toggle gr-toggle-arrow"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  href="/#"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {subItem.label}
                                  <i className="icon icon-small-down"></i>
                                </a>
                                <ul className="gr-menu-dropdown dropdown-menu dropdown-right">
                                  {subItem.items.map(
                                    (itemInner, indexInnerMost) => (
                                      <li
                                        className="drop-menu-item"
                                        key={itemInner.name + indexInnerMost}
                                      >
                                        {itemInner.isExternal ? (
                                          <a
                                            href={`${itemInner.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {itemInner.label}
                                          </a>
                                        ) : (
                                          <Link to={`/${itemInner.name}`}>
                                            {itemInner.label}
                                          </Link>
                                        )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li className="drop-menu-item">
                                {subItem.isExternal ? (
                                  <a
                                    href={`${subItem.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {subItem.label}
                                  </a>
                                ) : (
                                  <Link to={`/${subItem.name}`}>
                                    {subItem.label}
                                  </Link>
                                )}
                              </li>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" {...rest}>
                    {isExternal ? (
                      // <a
                      //   className="nav-link"
                      //   href={`${name}`}
                      //   target="_blank"
                      //   rel="noopener noreferrer"
                      // >
                      //   {label}
                      // </a>
                      <div>
                          <img
                            src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621923645/crown_retnxs.png"} alt=""
                            className="quizwizz-link-img"
                          />
                        <a
                          className='nav-link'
                          href="#"
                          id="navLink-quizwizz"
                          // data-toggle="modal"
                          // data-target="#modalRegister"
                          onClick={() => setTogglePopUp(true)}
                        > 
                          {label}
                        </a>
                        
                        <Modal
                          isOpen={togglePopUp}
                          shouldCloseOnOverlayClick={true}
                          onRequestClose={() => setTogglePopUp(false)}
                          style={{
                            overlay: {
                              // backgroundColor: "transparent",
                              opacity: "1",
                              position: "fixed",
                              transition: "opacity 500ms",
                              background: "rgba(0, 0, 0, 0.7)"
                            },
                            content: {
                              height: "90vh",
                              width: "30%",
                              margin: "auto",
                            }
                          }}
                        >
                          <img src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621923817/crown1_bsnzg3.png"} className="quizwizz-img" />
                          
                          <QuizWizzPopUp setTogglePopUp={setTogglePopUp} togglePopUp={togglePopUp} />
                        </Modal>

                        </div>
                          
                      
                    ) : (
                      <Link
                        className="nav-link"
                        to={`/${name}`}
                        role="button"
                        aria-expanded="false"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                )}
              </React.Fragment>
            );
          }
        )}
      </ul>
    </>
  );
};
export default Menu;
