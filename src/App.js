import { useEffect } from "react";
import "./App.css";
import { Pages } from "./components/pages/Pages";

import "aos/dist/aos.css"
import Aos from "aos";
const App = () => {
  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])
  return (
    <>
      <Pages />
    </>
  );
};

export default App;
