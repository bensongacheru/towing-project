import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">VBAMS</div>

      {/* Desktop Navigation Links */}
      <div className="space-x-4 hidden md:flex">
        <NavLink
          to="/"
          className="hover:text-gray-300"
          activeClassName="text-green-500"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-gray-300"
          activeClassName="text-green-500"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-gray-300"
          activeClassName="text-green-500"
        >
          Contact
        </NavLink>
        <NavLink
          to="/user-dashboard"
          className="hover:text-gray-300"
          activeClassName="text-green-500"
        >
          User Dashboard
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="hover:text-gray-300"
          activeClassName="text-green-500"
        >
          Admin Dashboard
        </NavLink>
      </div>

      {/* Mobile Navigation Links (Hamburger menu) */}
      <div className="md:hidden">
        <button className="text-white">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
