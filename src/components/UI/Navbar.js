import { Link } from "react-scroll";

import classes from "./Navbar.module.css";

const Navbar = (props) => {


  return (
    <div className={`${classes.header} ${!props.landingVisible && classes.scrolled}`}>
      <nav className={`container ${classes.nav}`}>
        <div className={classes.logo}>JC</div>
        <ul className={classes.links}>
          <li className={classes.pageLinks}><Link to="Work" smooth={true} offset={-100}>Work</Link></li>
          <li className={classes.pageLinks}><Link to="About" smooth={true} offset={-100}>About</Link></li>
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
