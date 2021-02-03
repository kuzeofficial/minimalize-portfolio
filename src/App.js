// COMPONENTS IMPORT'S
import Header from "./components/header"
import Home from "./components/home"
import About from "./components/about"
import Skills from "./components/skills"
import "../src/styles/styles.css"


function App() {
  return (
    <>
    <Header/>
    <main class="l-main">
      <Home/>
      <About/>
      <Skills/>
    </main>
    </>
  )
}

export default App;
