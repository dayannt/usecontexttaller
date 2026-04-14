import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../../context/MovieContext";

export const Saved = () => {
  const { favorites, watchLater, removeFavorite, removeWatchLater } = useContext(MovieContext)!;
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/catalogue")}>Volver al catálogo</button>
      <h1>Guardadas</h1>

      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No has agregado películas aún.</p>
      ) : (
        favorites.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <button onClick={() => removeFavorite(movie.id)}>Eliminar</button>
          </div>
        ))
      )}

      <h2>Ver más tarde</h2>
      {watchLater.length === 0 ? (
        <p>No has agregado películas aún.</p>
      ) : (
        watchLater.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <button onClick={() => removeWatchLater(movie.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};