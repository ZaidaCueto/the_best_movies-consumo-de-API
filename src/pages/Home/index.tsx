import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import Navbar  from "../../components/Navbar";
import "../styles.css"

interface Movie {
    topMovies: string;
    movie: any;
    title: never;
    // id: number;
}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
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
  
    console.log(topMovies);
  
    return (
        <main>
           <div className="container-navbar">
            <Navbar />
            </div> 

             
<div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
        </main>
    
    );
  };

