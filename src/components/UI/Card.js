import Button from './Button'
import classes from './Card.module.css'



const Card = (props) => {
   return (
      <div className={`${classes.card} ${props.className}`}>
         <div className={classes.info}>
            <p className={classes.stack}>{props.stack}</p>
            <h2 className={classes.header}>{props.header}</h2>
            <p className={classes.caption}>{props.caption}</p>
            <div className={classes.buttonContainer}>
               <a href={props.site_url} target="_blank" rel="noopener noreferrer">
                  <Button>Live Site</Button>
               </a>
               <a href={props.code_url} target="_blank" rel="noopener noreferrer">
                  <Button>See Code</Button>
               </a>
            </div>
         </div>
         <div className={classes.images}>
            <div className={classes.image}>
               <img src={props.image} alt={props.header}/>
            </div>
            {/* <div className={classes.image2}>
               <img src={props.image2} alt={props.header}/>
            </div> */}
         </div>
      </div>
   )
}

export default Card