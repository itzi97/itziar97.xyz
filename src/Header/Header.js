import "./Header.css";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { SiHaskell } from "react-icons/si";
import { RiMenuFill } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import TranslateIcon from '@material-ui/icons/Translate';

const Header = ({ routes, languages, handleLanguageChange, currentLanguage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const location = useLocation();

  const getLinks = () => {
    return routes.map((route) => (
      <a
        className={location.pathname === route.path ? "header__active" : null}
        href={route.path}
      >
        {currentLanguage === "English" ? route.titleEN : route.titleES}
      </a>
    ));
  };

  const getLanguageIcon = (lang) => {
    switch (lang) {
      case "English": return "https://www.countryflags.io/us/flat/24.png"
      case "Español": return "https://www.countryflags.io/es/flat/24.png"
    };
  };

  return (
    <div className="header">
      <div className="header__left">
        <SiHaskell />
        <a href="/">itziar97.xyz</a>
        {showLanguage ? (
          <div className="header__language__dropdown">
            {languages.map(l => (
              currentLanguage !== l ? (
                <div>
                  <img src={getLanguageIcon(l)} />
                  <p
                    onClick={() => {
                      handleLanguageChange(l);
                      setShowLanguage(!showLanguage);
                    }}>{l}</p>
                </div>) : null
            ))}
          </div>
        ) : null}
        <div className="header__language">
          <div
            onClick={() => setShowLanguage(!showLanguage)}
            className="header__language__menu"
          >
            <img src={getLanguageIcon(currentLanguage)} />
            {showLanguage ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
          </div>
        </div>
      </div>
      <div className="header__center"></div>
      <div className="header__right">{getLinks()}</div>
      <div className="header__collapsed">
        <RiMenuFill
          onClick={() => setShowMenu(!showMenu)}
          style={{ color: showMenu ? "#FFDF6C" : "white" }}
        />
        {showMenu ? (
          <div className="header__dropdown"> {getLinks()} </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
