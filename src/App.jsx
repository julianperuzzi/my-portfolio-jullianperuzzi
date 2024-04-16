import { Routes, BrowserRouter , Route} from "react-router-dom"
import NameComponent from "./components/NameComponent"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



function App() {

  return (


    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<About/>} />


      </Routes>

    <Footer/>
    </BrowserRouter>
  )
}

export default App
