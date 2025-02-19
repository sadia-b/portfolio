import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  const [isFilterVisible, setisFilterVisible] = useState(false);
  return (
    <>
      <Header
        isFilterVisible={isFilterVisible}
        setisFilterVisible={setisFilterVisible}
      />
      <Hero />
      {isFilterVisible ? <FilterPanel /> : null}
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
