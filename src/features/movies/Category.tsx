import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Calendar } from 'lucide-react';
import { useMovieStore } from '../../stores/useMovieStore';

const Category = () => {
    const { category } = useParams<{ category: string }>();
    const { movies } = useMovieStore();

    const filteredMovies = movies.filter(
        (movie) => movie.category.toLowerCase() === category?.toLowerCase()
    );

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
                <h1 className="text-4xl font-bold text-white">
                    {category} Movies
                </h1>
            </div>

            {/* Movies Grid */}
            {filteredMovies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredMovies.map((movie, index) => (
                        <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/moviedetail/${movie.id}`}
                                className="group flex gap-4 p-4 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="w-32 h-48 flex-shrink-0 rounded-xl overflow-hidden">
                                    <img
                                        src={movie.backdrop_path}
                                        alt={movie.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col justify-between py-2">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors mb-2">
                                            {movie.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 line-clamp-3">
                                            {movie.overview}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm mt-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                            <span className="text-gray-300">{movie.vote_average}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4 text-gray-500" />
                                            <span className="text-gray-500">{movie.release_date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-gray-400 text-lg">No movies found in this category.</p>
                    <Link
                        to="/movies"
                        className="inline-flex items-center gap-2 mt-4 text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        Browse all movies →
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Category;
