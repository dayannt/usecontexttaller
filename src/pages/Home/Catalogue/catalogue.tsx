import { useContext } from "react";
import { useNavigate } from "react-router-dom";  // agregar este import
import { MovieContext } from "../../../context/MovieContext";
import movies from "../../../data/movies.json";




export const Catalogue = () => {
  const { addFavorite, addWatchLater } = useContext(MovieContext)!;
  const navigate = useNavigate(); 

  return (
    <div>
      <h1>Catálogo de pelis</h1>
      <button onClick={() => navigate("/saved")}>Ver guardadas</button> 
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.genre} - {movie.year}</p>
          <button onClick={() => addFavorite(movie)}>Agregar a favoritos</button>
          <button onClick={() => addWatchLater(movie)}>Ver más tarde</button>
        </div>
      ))}
    </div>
  );
};