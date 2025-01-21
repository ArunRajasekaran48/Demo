import ClassCompEg from "./components/ClassComponent/ClassCompEG"
import About from "./components/FunctionalComponent/About"
import Home from "./components/FunctionalComponent/Home"
import Gallery from "./components/FunctionalComponent/Gallery"
import Contact from "./components/FunctionalComponent/Contact"
import Navbar from "./components/FunctionalComponent/Navbar"
import {BrowserRouter , Routes, Route} from "react-router-dom"
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery image="SECE LOGO" page="Gallery"/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div> 
  )
}
export default App;