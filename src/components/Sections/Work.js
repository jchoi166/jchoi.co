import Card from '../UI/Card'
import SectionHeader from '../UI/SectionHeader'
import classes from './Work.module.css'

// import CatExplore from '../../assets/CatExplore.png'
import CatalogueImage from '../../assets/CatalogueImage.png'

const Work = () => {
   return (
      <section className={`container ${classes.work}`}>
         <SectionHeader title='Work'/>
         <div className={classes.cardContainer}>
         <Card 
            stack="React &middot; Redux &middot; Firebase"
            header="Catalogue"
            caption="A full stack application used to discover new books and save them to a profile. Features include a search bar, explore page, and user authentication."
            image1={CatalogueImage}
            // image2={CatSearch} 
         />
         </div>
      </section>
   )
}

export default Work