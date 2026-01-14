import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

// Lazy load pages for performance
const Home = lazy(() => import('./features/home/Home'));
const Movies = lazy(() => import('./features/movies/Movies'));
const MovieDetail = lazy(() => import('./features/movies/MovieDetail'));
const Category = lazy(() => import('./features/movies/Category'));
const Login = lazy(() => import('./features/auth/Login'));
const SignUp = lazy(() => import('./features/auth/SignUp'));
const About = lazy(() => import('./features/about/About'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center h-screen bg-background text-primary">
    <div className="animate-pulse text-2xl font-bold">Loading AetherReel...</div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/moviedetail/:id" element={<MovieDetail />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
