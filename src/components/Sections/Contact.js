import SectionHeader from "../UI/SectionHeader";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={classes.contact}>
      <div className="container">
        <SectionHeader title="Contact" />
        <div className={classes.info}>
          <h1>
            Please email me at: <span>jchoi@gmail.com</span> for any business
            related inquires.
          </h1>
          <div className={classes.social}>
            <a
              href="https://github.com/jchoi166"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/therealjinchoi/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/jin-choi-ab1083167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
