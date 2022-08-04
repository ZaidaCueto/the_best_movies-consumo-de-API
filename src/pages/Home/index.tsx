import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";

interface Movie {
    topMovies: string;
    movie: string;
    title: never;
}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
const [topMovies, setTopMovies] = useState([]);


    const getTopRatedMovies = async (url:string) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
};
useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);
  return (

<div>
<Navbar/> 
<div className="container">
    <h2 className="title">Melores firlmes</h2>
    <div className="movies-container">
        {topMovies.length  === 0 && <p>Carregando...</p>}
    {topMovies.length > 0 && 
    topMovies.map((movie )=> <p>{movie.title}</p>)} 
    </div>


</div>

</div>
  )
}

export default Home
