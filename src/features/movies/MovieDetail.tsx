import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Calendar, Globe, Users } from 'lucide-react';
import { useMovieStore } from '../../stores/useMovieStore';

const MovieDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { movies } = useMovieStore();

    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Movie Not Found</h2>
                <p className="text-gray-400 mb-6">The movie you're looking for doesn't exist.</p>
                <Link
                    to="/movies"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Movies
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden">
                <img
                    src={movie.backdrop_path}
                    alt={movie.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                {/* Back Button */}
                <Link
                    to="/movies"
                    className="absolute top-6 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors"
                >
                    <ArrowLeft className="h-5 w-5 text-white" />
                </Link>

                {/* Movie Info Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                >
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30 mb-4">
                        {movie.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
                        {movie.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                            <span className="text-white font-medium">{movie.vote_average}</span>
                            <span className="text-gray-400">/ 5</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>{movie.release_date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Globe className="h-4 w-4" />
                            <span className="uppercase">{movie.original_language}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Users className="h-4 w-4" />
                            <span>{movie.vote_count.toLocaleString()} votes</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-3 gap-8"
            >
                {/* Overview */}
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
                        <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
                    </div>

                    {movie.original_title !== movie.title && (
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Original Title</h3>
                            <p className="text-white">{movie.original_title}</p>
                        </div>
                    )}
                </div>

                {/* Stats Card */}
                <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 space-y-4 h-fit">
                    <h3 className="text-lg font-semibold text-white">Movie Stats</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Popularity</span>
                            <span className="text-white font-medium">{movie.popularity.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Vote Count</span>
                            <span className="text-white font-medium">{movie.vote_count.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Adult Content</span>
                            <span className="text-white font-medium">{movie.adult ? 'Yes' : 'No'}</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default MovieDetail;
