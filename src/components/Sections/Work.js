import Card from '../UI/Card'
import SectionHeader from '../UI/SectionHeader'
import classes from './Work.module.css'

// import CatExplore from '../../assets/CatExplore.png'
import CatalogueImage from '../../assets/CatalogueImage.png'
import RestCountriesImage from '../../assets/RestCountriesImage.png'
import JackieImage from '../../assets/JackieImage.png'
import InsureImage from '../../assets/InsureImage.png'

const Work = () => {
   return (
      <section className={`container ${classes.work}`} id="Work">
         <SectionHeader title='Work'/>
         <div className={classes.cardContainer}>
         <Card 
            className={classes.card1}
            stack="React &middot; Redux &middot; Firebase"
            header="Catalogue"
            caption="A CRUD application where a user can discover new books and save their favorites to their profile. Features include a search bar, explore page, and user authentication."
            image={CatalogueImage}
            site_url="https://silly-euler-e12333.netlify.app/"
            code_url="https://github.com/jchoi166/Catalogue"
         />
         <Card 
            className={classes.card2}
            stack="React &middot; Context API"
            header="Rest Countries API"
            caption="An application that allows you to search for different countries and view detailed information on each one. Users are able to filter results by region and view bordering countries. Also includes a dark mode!"
            image={RestCountriesImage}
            site_url="https://practical-hoover-95d4bd.netlify.app"
            code_url="https://github.com/jchoi166/Rest-Countries-API"
         />
         <Card 
            className={classes.card3}
            stack="HTML &middot; Sass &middot; Intersection Observer API"
            header="Jackie Chan Tribute Page"
            caption="This is a static website dedicated to the legend himself, Jackie Chan. I used this project to practice building websites from scratch, with only the image of the site as reference. I also took this opportunity to learn the Intersection Observer API for the navigation bar."
            image={JackieImage}
            site_url="https://jchoi166.github.io/tributeJackie/"
            code_url="https://github.com/jchoi166/tributeJackie"
         />
         <Card 
            className={classes.card4}
            stack="HTML &middot; Sass &middot; Css Grid"
            header="Insure Landing Page"
            caption="This fully responsive, static site was made from a prompt provided by the website - frontendmentor.com. I used this project as an opportunity to build a static website from scratch, using the design of a different website as a reference. Only the assets and design was provided by Front End Mentor."
            image={InsureImage}
            site_url="https://infallible-davinci-e3d249.netlify.app"
            code_url="https://github.com/jchoi166/Insure"
         />
         </div>
      </section>
   )
}

export default Work