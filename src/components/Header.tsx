import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Mail className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">ConnectHub</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#home" label="Home" />
          <Link href="#about" label="About" />
          <Link href="#services" label="Services" />
          <Link href="#contact" label="Contact" />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md transform transition-transform duration-200 ease-in-out">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#home" label="Home" onClick={() => setIsMenuOpen(false)} />
            <Link href="#about" label="About" onClick={() => setIsMenuOpen(false)} />
            <Link href="#services" label="Services" onClick={() => setIsMenuOpen(false)} />
            <Link href="#contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;