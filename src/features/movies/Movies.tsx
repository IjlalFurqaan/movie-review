import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Calendar } from 'lucide-react';
import { useMovieStore } from '../../stores/useMovieStore';

const Movies = () => {
    const { movies } = useMovieStore();

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    to="/"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5 text-white" />
                </Link>
                <h1 className="text-4xl font-bold text-white">All Movies</h1>
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {movies.map((movie, index) => (
                    <motion.div
                        key={movie.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <Link
                            to={`/moviedetail/${movie.id}`}
                            className="group block overflow-hidden rounded-2xl bg-gray-900/50 border border-white/5 hover:border-indigo-500/50 transition-all duration-300"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={movie.backdrop_path}
                                    alt={movie.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-4 space-y-3">
                                <h3 className="text-lg font-semibold text-white truncate group-hover:text-indigo-400 transition-colors">
                                    {movie.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                        <span className="text-gray-300">{movie.vote_average}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4 text-gray-500" />
                                        <span className="text-gray-500">{movie.release_date}</span>
                                    </div>
                                </div>
                                <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-400 rounded-full">
                                    {movie.category}
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
