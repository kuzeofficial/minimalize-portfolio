// COMPONENTS IMPORT'S

import Header from "./components/header"
import Home from "./components/home"
import About from "./components/about"
import Skills from "./components/skills"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"


import "../src/styles/styles.css"


function App() {
  return (
    <>
    <Header/>
    <main class="l-main">
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App;
