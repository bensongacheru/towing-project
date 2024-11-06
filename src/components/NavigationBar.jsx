import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-lg font-bold">Towing Service</div>

      {/* Desktop Navigation Links */}
      <div className="space-x-4 hidden md:flex">
        <NavLink
          to="/"
          className={({ isActive }) => `px-3 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => `px-3 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `px-3 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
        >
          Contact
        </NavLink>
        <NavLink
          to="/user-dashboard"
          className={({ isActive }) => `px-3 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
        >
          User Dashboard
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) => `px-3 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
        >
          Admin Dashboard
        </NavLink>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
      >
        <i className={`fas fa-bars ${isMenuOpen ? 'fa-times' : ''}`}></i>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) => `block px-3 py-2 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => `block px-3 py-2 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `block px-3 py-2 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
          >
            Contact
          </NavLink>
          <NavLink
            to="/user-dashboard"
            className={({ isActive }) => `block px-3 py-2 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
          >
            User Dashboard
          </NavLink>
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) => `block px-3 py-2 ${isActive ? 'text-green-500' : 'hover:text-gray-300'}`}
          >
            Admin Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
