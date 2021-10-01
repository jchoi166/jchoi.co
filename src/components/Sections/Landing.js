import { useRef, useEffect } from "react"
import useVisible from "../../hooks/use-visible"

import classes from "./Landing.module.css"

const Landing = (props) => {

   const landing = useRef()
   const options = {
      root: null, 
      threshold: 0,
      rootMargin: '-100px'
   }
   const landingIsVisible = useVisible(landing, options)
   
   useEffect(() => {
      props.onVisible(landingIsVisible)
   }, [landingIsVisible, props])


   return (
      <section className={classes.landing} ref={landing} id='Landing'>
         <div className={`container ${classes.title}`}>
            <div className={classes.heading}>
               <h1>Jin Choi</h1>
               <h1>Front-End Web Developer</h1>
            </div>
         </div>
      </section>
   )
}

export default Landing 