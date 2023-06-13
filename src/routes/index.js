import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
function MyRoutes() {
    return (
      
      <BrowserRouter>
        <Navbar/>
        <Slider/>    
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      );
}

export default MyRoutes;