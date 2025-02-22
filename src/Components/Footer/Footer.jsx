import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo & Description */}
        <div className="mb-6 md:mb-0">
          <img className="w-[80px] mx-auto sm:mx-0" src={logo} alt=""/>
          <p className="text-gray-400 text-sm mt-2">
            The best link shortener service, making your URLs more manageable.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition">About</Link>
          <Link href="/features" className="text-gray-300 hover:text-white transition">Features</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition">Privacy Policy</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0 ">
          <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
