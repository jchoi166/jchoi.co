import { Fragment } from "react";
import Landing from "./components/Sections/Landing";
import Work from "./components/Sections/Work";
import Navbar from "./components/UI/Navbar";


function App() {

  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Work />
    </Fragment>
  );
}

export default App;
