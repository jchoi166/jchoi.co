import { Link } from "react-scroll";

import classes from "./Navbar.module.css";

const Navbar = (props) => {


  return (
    <div className={`${classes.header} ${!props.landingVisible && classes.scrolled}`}>
      <nav className={`container ${classes.nav}`}>
        <h1 className={classes.logo}>
          <Link to="Landing" smooth={true} offset={-100}>JC</Link>
        </h1>
        <ul className={classes.links}>
          <li className={classes.pageLinks}><Link to="Work" smooth={true} offset={-100}>Work</Link></li>
          <li className={classes.pageLinks}><Link to="About" smooth={true} offset={-100}>About</Link></li>
          <li>
          <a
              href="https://www.linkedin.com/in/jin-choi-ab1083167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
          <a
              href="https://github.com/jchoi166"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
