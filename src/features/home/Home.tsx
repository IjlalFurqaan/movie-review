import { motion } from 'framer-motion';
import { useMovieStore } from '../../stores/useMovieStore';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const { movies } = useMovieStore();
  const featuredMovie = movies[0]; // Just picking the first one for the Hero

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <img
            src={featuredMovie?.backdrop_path || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1'}
            alt="Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-400 backdrop-blur-md mb-4 border border-indigo-500/20">
              #1 Trending
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
              {featuredMovie?.title || 'Unlock the Universe of Cinema'}
            </h1>
            <p className="text-lg text-gray-300 mb-8 line-clamp-3">
              {featuredMovie?.overview || 'Discover reviews, ratings, and deep dives into the films that shape our culture.'}
            </p>
            <div className="flex gap-4">
               <Link to={`/moviedetail/${featuredMovie?.id}`}>
                <button className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-black transition-transform hover:scale-105">
                    Read Review
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
               <Link to="/movies">
                <button className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20">
                    Browse All
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Trending Now</h2>
            <Link to="/movies" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium">View All &rarr;</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.slice(1, 5).map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/5 hover:border-indigo-500/50 transition-colors"
            >
              <div className="aspect-[2/3] w-full overflow-hidden">
                 <img
                  src={movie.backdrop_path} 
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 p-4 w-full">
                <h3 className="text-lg font-bold text-white truncate">{movie.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-gray-300">{movie.vote_average}</span>
                    <span className="text-xs text-gray-500">• {movie.release_date}</span>
                </div>
              </div>
              <Link to={`/moviedetail/${movie.id}`} className="absolute inset-0" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
