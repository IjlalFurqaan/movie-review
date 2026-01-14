import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movies' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
          <Film className="h-6 w-6 text-indigo-500" />
          <span>AetherReel</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                "relative text-sm font-medium transition-colors hover:text-white",
                location.pathname === link.path ? "text-white" : "text-gray-400"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-indigo-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <button className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-all">
              <User className="h-4 w-4" />
              Sign In
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b border-white/10 bg-black p-4"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-400 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
             <Link to="/login" onClick={() => setIsOpen(false)} className="text-sm font-medium text-indigo-400">
                Sign In
             </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
