import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-center text-sm text-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Contact</Link>
          <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-white transition-colors">Terms</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} AetherReel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
