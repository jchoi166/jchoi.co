import { Fragment, useRef } from "react";
import classes from "./About.module.css";

import useVisible from "../../hooks/use-visible";
import SectionHeader from "../UI/SectionHeader";

const About = () => {
  const about = useRef();

  const options = {
    root: null,
    threshold: 0.2,
    rootMargin: "0px",
  };

  const aboutIsVisible = useVisible(about, options);

  return (
    <Fragment>
      <hr className="divider"></hr>
      <section
        className={`container ${classes.about}`}
        id="About"
        ref={about}
        data-type="about"
      >
        <SectionHeader title="About Me" className={classes.header} />
        <p className={`${classes.info} ${aboutIsVisible && classes.shown}`}>
          Hello! My name is Jin and I'm a front-end web developer based in
          Irvine, CA. I have a passion for games, art, and anything else
          visually inspiring.
          <br></br>
          <br></br>
          My most recent experience is with {' '}
          <a
            href="https://zyllion.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zyllion
          </a>
          , a small massage equipment business in Lake Forest, CA. I was in
          charge of maintaining their Shopify website using HTML, Css, and
          Liquid, and customizing a new Shopify theme for future deployment.
          <br></br>
          <br></br>I also work as a tech intern for {' '}
          <a
            href="https://new.lanfest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LANFest
          </a>
          . There, I helped create various components for their new Drupal
          website in which I was introduced to Twig and Pattern Lab.
          <br></br>
          <br></br>I focus mainly on front-end development, however I'm
          defintely open to learning back-end work, especially with the
          completion of my most recent project! I would consider myself a brown
          belt in Google-Fu, and have plently of experience learning new
          technologies on the fly.
        </p>
      </section>
    </Fragment>
  );
};

export default About;
