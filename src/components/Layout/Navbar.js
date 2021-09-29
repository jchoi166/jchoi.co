import { useState, useRef } from "react"

import useVisible from "../../hooks/use-visible"
import classes from "./Navbar.module.css"

const Navbar = () => {

   const nav1 = useRef()
   const nav1Scrolled = useVisible(nav1)


   console.log("nav1" + nav1Scrolled)

   // const nav2 = `${classes.nav2} ${!nav1Scrolled && classes.navScrolled2}`
   return (
      <div className={`${classes.header} ${!nav1Scrolled && classes.scrolled}`}>
         <div className={classes.nav2Container}>
            <nav className={`container ${classes.nav} ${classes.nav2}`}>This is nav 2</nav>
         </div>
         <nav className={`container ${classes.nav} ${classes.nav1}`} ref={nav1}>This is nav 1</nav>
      </div>
   ) 
}


export default Navbar