import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Features</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "" : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation - Sliding from Left to Right */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-900/90 backdrop-blur-lg shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button className="text-2xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 text-lg text-left ml-12 mt-12">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Features</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
