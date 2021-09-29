import Button from './Button'
import classes from './Card.module.css'



const Card = (props) => {
   return (
      <div className={classes.card}>
         <div className={classes.info}>
            <p className={classes.stack}>{props.stack}</p>
            <h2 className={classes.header}>{props.header}</h2>
            <p className={classes.caption}>{props.caption}</p>
            <div className={classes.buttonContainer}>
               <Button>Live Site</Button>
               <Button>See Code</Button>
            </div>
         </div>
         <div className={classes.images}>
            <div className={classes.image1}>
               <img src={props.image1} alt={props.header}/>
            </div>
            {/* <div className={classes.image2}>
               <img src={props.image2} alt={props.header}/>
            </div> */}
         </div>
      </div>
   )
}

export default Card