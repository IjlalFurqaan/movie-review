export interface Movie {
  id: number;
  title: string;
  original_title?: string;
  overview: string;
  backdrop_path: string;
  poster_path?: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  category: string;
  adult: boolean;
  original_language: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}
