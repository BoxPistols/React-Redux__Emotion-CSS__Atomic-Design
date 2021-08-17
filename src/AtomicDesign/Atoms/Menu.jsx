// import * as ui from "../Utility/ui";
import { useState, useEffect } from "react";
// import { css } from "@emotion/css";
import { CSSTransition } from "react-transition-group";
import mod from "./menu.module.scss";

/*
  const handleEvent = () => {
    // TODO: Remove fix to Test
    console.log("Click on handleEvent");
  };
*/

export const Menu = () => {
  const [nav, showNav] = useState(false);
  useEffect(() => {
    nav
      ? document.body.classList.add("nav_on")
      : document.body.classList.remove("nav_on");
  }, [nav]);

  console.log(nav);

  return (
    <CSSTransition
      in={nav}
      className="switch"
      onClick={() => showNav(!nav)}
      timeout={0}
    >
      <div nav={nav}>
        <div className={mod.em__menu_btn} onClick={() => showNav(nav)}>
          <div className={mod.em__menu_bar} />
          <div className={mod.em__menu_bar} />
          <div className={mod.em__menu_bar} />
        </div>
        <nav className={mod.nav}>
          <ul>
            <li>{nav ? "aaa" : "bbb"} Manu</li>
            <li>Manu</li>
            <li>Manu</li>
          </ul>
        </nav>
      </div>
    </CSSTransition>
  );
};
