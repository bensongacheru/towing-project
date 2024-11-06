import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      {/* Welcome Section */}
      <section className="text-center bg-gradient-to-r from-gray-800 to-gray-700 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-white">Welcome to VBAMS</h1>
        <p className="text-gray-300 mt-4">24/7 roadside assistance services to get you back on track!</p>
      </section>

      {/* Services and Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-300">We offer towing, jump-start, flat tire, and lock-out assistance services to keep you moving.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-300">Phone: +1234567890</p>
          <p className="text-gray-300">Email: support@vbams.com</p>
        </div>
      </section>

      {/* Dashboard Links Section */}
      <section className="text-center bg-gradient-to-r from-gray-800 to-gray-700 p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Dashboards</h2>
        <div className="space-x-4">
          <Link
            to="/user-dashboard"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            User Dashboard
          </Link>
          <Link
            to="/admin-dashboard"
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Admin Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}
