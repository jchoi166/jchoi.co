import { Fragment } from "react";
import About from "./components/Sections/About";
import Landing from "./components/Sections/Landing";
import Work from "./components/Sections/Work";
import Navbar from "./components/UI/Navbar";


function App() {

  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Work />
      <About />
    </Fragment>
  );
}

export default App;
