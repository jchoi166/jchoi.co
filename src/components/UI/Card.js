import { useRef } from 'react'

import useVisible from '../../hooks/use-visible'

import Button from './Button'
import classes from './Card.module.css'


const Card = (props) => {

   const card = useRef()

   const options = {
      root: null, 
      threshold: .20,
      rootMargin: '0px'
   }

   const cardIsVisible = useVisible(card, options)
   
   return (
      <div className={`${classes.card} ${cardIsVisible && classes.show} ${props.className}`} ref={card} data-type='card'>
         <div className={classes.info}>
            <p className={classes.stack}>{props.stack}</p>
            <h2 className={classes.header}>{props.header}</h2>
            <div className={classes.caption}>{props.children}</div>
            <div className={classes.buttonContainer}>
               <a href={props.site_url} target="_blank" rel="noopener noreferrer">
                  <Button className={classes.button}>Live Site</Button>
               </a>
               <a href={props.code_url} target="_blank" rel="noopener noreferrer">
                  <Button className={classes.button}>See Code</Button>
               </a>
            </div>
         </div>
         <div className={classes.images}>
            <div className={classes.image}>
               <img src={props.image} alt={props.header}/>
            </div>
         </div>
      </div>
   )
}

export default Card