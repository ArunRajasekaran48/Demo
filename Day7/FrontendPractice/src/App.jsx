import ClassCompEg from "./components/ClassComponent/ClassCompEG"
import About from "./components/FunctionalComponent/About"
import Home from "./components/FunctionalComponent/Contact"
import Gallery from "./components/FunctionalComponent/Gallery"
import Contact from "./components/FunctionalComponent/Home"
function App(){
  return(
    <div>
      <Home/><hr/>
      <About/><hr/>
      <ClassCompEg /><hr/>
      <h2>Without Props</h2>
      <Gallery/>
      <h2>With Props</h2>
      <Gallery image="SECE LOGO" page="Gallery"/><hr/>
      <Contact/>
    </div>
  )
}
export default App;