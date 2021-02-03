// COMPONENTS IMPORT'S
import Header from "./components/header"
import Home from "./components/home"
import About from "./components/about"
import "../src/styles/styles.css"


function App() {
  return (
    <>
    <Header/>
    <main class="l-main">
      <Home/>
      <About/>
    </main>
    </>
  )
}

export default App;
