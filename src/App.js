import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css"


import MyNavbar from "./components/navbar/MyNavbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Details from "./pages/details/Details";



function App() {
  //! burada navbar ve footer demirbaş olmalı, Home, About, Details sayfaları Route etiketleri ile Routes içinde belirlenmeli

  return (
    <div>
      <Router>


        <MyNavbar/>

        <Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Details/:namee" element={<Details/>}/>

        </Routes>


        <Footer />


      </Router>
    </div>
  );
}

export default App;
