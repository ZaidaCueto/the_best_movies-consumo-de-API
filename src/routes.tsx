import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies  from "./pages/Movies";
import { Search } from "./pages/Search";



const AppRoutes: React.FC = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movie/:id" element={<Movies/>} />
                <Route path="/search" element={<Search/>} />
             
            </Routes>
        </BrowserRouter>
      
    );
}

export default AppRoutes;