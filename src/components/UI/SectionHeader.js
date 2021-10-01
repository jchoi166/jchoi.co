import classes from './SectionHeader.module.css'

const SectionHeader = (props) => {
   return (
      <div className={`${classes.header} ${props.className}`}>
         <h1>
            {props.title}
         </h1>
      </div>
   )
}

export default SectionHeader