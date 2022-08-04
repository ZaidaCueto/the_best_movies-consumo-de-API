import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Search } from "./pages/Search";


const AppRoutes = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movei/:id" element={<Movies/>} />
                <Route path="/search" element={<Search/>} />
             
            </Routes>
        </BrowserRouter>
      
    );
}

export default AppRoutes;