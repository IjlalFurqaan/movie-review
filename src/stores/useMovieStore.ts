import { create } from 'zustand';
import { Movie } from '../types';
import moviesData from '../data/movies.json';

interface MovieState {
  movies: Movie[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  // In a real app, fetchMovies would be an async action using axios
  fetchMovies: () => void; 
}

export const useMovieStore = create<MovieState>((set) => ({
  movies: moviesData.movies, // Load initial data from JSON
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  fetchMovies: () => {
    // Mock re-fetch or filter logic could go here
    set({ movies: moviesData.movies });
  },
}));
