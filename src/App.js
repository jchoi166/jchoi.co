import { Fragment, useState } from "react";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Landing from "./components/Sections/Landing";
import Work from "./components/Sections/Work";
import Navbar from "./components/UI/Navbar";


function App() {

  const [landingIsVisible, setLandingIsVisible] = useState(null)

  const landingVisibleHandler = (isVisible) => {
    setLandingIsVisible(isVisible)
  }

  return (
    <Fragment>
      <Navbar landingVisible={landingIsVisible}/>
      <Landing onVisible={landingVisibleHandler}/>
      <Work />
      <About />
      <Contact />
    </Fragment>
  );
}

export default App;
