import { useRef } from "react";

import useVisible from "../../hooks/use-visible";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const nav = useRef();
  const navScrolled = useVisible(nav);

  console.log("nav1" + navScrolled);

  // const nav2 = `${classes.nav2} ${!nav1Scrolled && classes.navScrolled2}`
  return (
    <div className={`${classes.header} ${!navScrolled && classes.scrolled}`}>
      {/* <div className={classes.nav2Container}>
        <nav className={`container ${classes.nav} ${classes.nav2}`}>
          This is nav 2
        </nav>
      </div> */}
      <nav className={`container ${classes.nav}`} ref={nav}>
        <div className={classes.logo}>JC</div>
        <ul className={classes.links}>
          <li>Work</li>
          <li>About</li>
          <li>
            <i className="fab fa-linkedin"></i>
          </li>
          <li>
            <i className="fab fa-github"></i>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
