import { createContext, useState } from "react";

type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
  image: string;
};

type MovieContextType = {
  favorites: Movie[];
  watchLater: Movie[];
  addFavorite: (movie: Movie) => void;
  addWatchLater: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  removeWatchLater: (id: number) => void;
};

export const MovieContext = createContext<MovieContextType | null>(null);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [watchLater, setWatchLater] = useState<Movie[]>([]);

const addFavorite = (movie: Movie) => {
  if (favorites.find((m) => m.id === movie.id)) return;
  setFavorites([...favorites, movie]);
};

const addWatchLater = (movie: Movie) => {
  if (watchLater.find((m) => m.id === movie.id)) return;
  setWatchLater([...watchLater, movie]);
};

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((m) => m.id !== id));
  };

  const removeWatchLater = (id: number) => {
    setWatchLater(watchLater.filter((m) => m.id !== id));
  };

  return (
    <MovieContext.Provider
      value={{ 
        favorites, 
        watchLater, 
        addFavorite, 
        addWatchLater, 
        removeFavorite, 
        removeWatchLater }}
    >
      {children}
    </MovieContext.Provider>
  );
};