import classes from "./Landing.module.css"

const Landing = () => {
   return (
      <section className={classes.landing}>
         <div className={`container ${classes.title}`}>
            {/* <h1 className={classes.name}>
               Welcome! I'm Jin. 
            </h1>
            <div className={classes.caption}>
               <h1>I'm Front End Web Developer,
                  casually try-hard FPS gamer and anime enthusiast
               </h1>
            </div> */}
            <div className={classes.heading}>
               <h1>Jin Choi</h1>
               <h1>Front-End Web Developer</h1>
            </div>
         </div>
      </section>
   )
}

export default Landing 