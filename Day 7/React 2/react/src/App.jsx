import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

import About from "./Pages/about/about";
import Project from "./Pages/projects/project";
import Contact from "./Pages/contacts/contact";

function App() {

  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <>
          <Slider />
          <Hero setPage={setPage} />
        </>
      )}

      {page === "about" && <About />}

      {page === "projects" && <Project />}

      {page === "contact" && <Contact />}

      <Footer />
    </>
  );
}

export default App;