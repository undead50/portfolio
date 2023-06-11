import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
function MyRoutes() {
    return (
        
    <BrowserRouter>
        <Navbar/>
        <Slider/>    
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      );
}

export default MyRoutes;