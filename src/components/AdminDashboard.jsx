import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  // State for adding a driver
  const [isAddingDriver, setIsAddingDriver] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newDriver, setNewDriver] = useState({ name: '', vehicle: '', status: 'Active' });
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [currentCategory, setCurrentCategory] = useState(''); // Track the category for filtered requests

  // Example data for drivers and requests
  const exampleDrivers = [
    { name: 'John Doe', vehicle: 'Truck A', status: 'Active' },
    { name: 'Jane Smith', vehicle: 'Truck B', status: 'Inactive' },
  ];

  const exampleRequests = [
    { name: 'Alice', email: 'alice@example.com', mobile: '1234567890', status: 'Approved', lastAction: 'Created Request' },
    { name: 'Bob', email: 'bob@example.com', mobile: '0987654321', status: 'On the way', lastAction: 'Assigned Driver' },
    { name: 'Charlie', email: 'charlie@example.com', mobile: '1122334455', status: 'Rejected', lastAction: 'Cancelled Request' },
    { name: 'Daisy', email: 'daisy@example.com', mobile: '6677889900', status: 'Completed', lastAction: 'Delivered' },
  ];

  // Fetch data (in a real app, you would fetch this from your API)
  useEffect(() => {
    setDrivers(exampleDrivers);
    setRequests(exampleRequests);
  }, []);

  // Filter requests based on search query
  const filteredRequests = requests.filter((request) => {
    return (
      request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.mobile.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Filter requests by status category
  const getFilteredRequestsByCategory = () => {
    if (currentCategory === 'Approved') {
      return requests.filter((req) => req.status === 'Approved');
    } else if (currentCategory === 'Rejected') {
      return requests.filter((req) => req.status === 'Rejected');
    } else if (currentCategory === 'On the way') {
      return requests.filter((req) => req.status === 'On the way');
    } else if (currentCategory === 'Completed') {
      return requests.filter((req) => req.status === 'Completed');
    } else {
      return requests; // Return all requests by default
    }
  };

  // Add a new driver handler
  const addDriverHandler = () => {
    if (newDriver.name && newDriver.vehicle) {
      setDrivers([...drivers, newDriver]); // Adds the new driver to the list
      setNewDriver({ name: '', vehicle: '', status: 'Active' }); // Reset the new driver form
      setIsAddingDriver(false); // Close the "Add Driver" form
    } else {
      alert('Please fill in the driver details');
    }
  };

  // Handle input changes for new driver form
  const handleDriverChange = (e) => {
    const { name, value } = e.target;
    setNewDriver((prevDriver) => ({
      ...prevDriver,
      [name]: value,
    }));
  };

  // Function to handle button click and set the current section and category
  const handleNavigation = (section, category = '') => {
    setCurrentSection(section);
    setCurrentCategory(category); // Set the category when navigating to requests view
  };

  // Render View Details Table for Requests
  const renderRequestDetails = () => {
    const filteredByCategory = getFilteredRequestsByCategory();
    return (
      <div className="overflow-x-auto shadow-lg rounded-md bg-white">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">S/No</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Mobile</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Last Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredByCategory.map((req, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{req.name}</td>
                <td className="py-3 px-4">{req.mobile}</td>
                <td className="py-3 px-4">{req.email}</td>
                <td className="py-3 px-4">{req.status}</td>
                <td className="py-3 px-4">{req.lastAction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Render View Details Table for Drivers
  const renderDriverDetails = () => {
    return (
      <div className="overflow-x-auto shadow-lg rounded-md bg-white">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">S/No</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Vehicle</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{driver.name}</td>
                <td className="py-3 px-4">{driver.vehicle}</td>
                <td className="py-3 px-4">{driver.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Calculate counts for each category
  const approvedRequests = requests.filter((req) => req.status === 'Approved').length;
  const rejectedRequests = requests.filter((req) => req.status === 'Rejected').length;
  const onTheWayRequests = requests.filter((req) => req.status === 'On the way').length;
  const completedRequests = requests.filter((req) => req.status === 'Completed').length;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-5">
        <div className="mb-6">
          <button
            onClick={() => handleNavigation('dashboard')}
            className="text-lg hover:text-green-500"
          >
            Dashboard
          </button>
        </div>
        <div className="mb-6">
          <button
            onClick={() => setIsAddingDriver((prev) => !prev)} // Toggle visibility of Add Driver form
            className="w-full py-2 px-4 bg-gray-700 hover:bg-green-500 text-white rounded-md focus:outline-none"
          >
            {isAddingDriver ? 'Cancel Add Driver' : 'Add Driver'}
          </button>
        </div>
        <div className="mb-6">
          <button
            onClick={() => handleNavigation('viewDrivers')}
            className="w-full py-2 px-4 bg-gray-700 hover:bg-green-500 text-white rounded-md focus:outline-none"
          >
            View Drivers
          </button>
        </div>
        <div className="mb-6">
          <button
            onClick={() => handleNavigation('viewRequests')}
            className="w-full py-2 px-4 bg-gray-700 hover:bg-green-500 text-white rounded-md focus:outline-none"
          >
            View Requests
          </button>
        </div>
        <div className="mb-6">
          <button
            onClick={() => handleNavigation('driverProgram')}
            className="w-full py-2 px-4 bg-gray-700 hover:bg-green-500 text-white rounded-md focus:outline-none"
          >
            Driver Program
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 p-6">
        {/* Add Driver Form */}
        {isAddingDriver && (
          <div className="bg-white p-6 rounded-md shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Add New Driver</h3>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={newDriver.name}
                onChange={handleDriverChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Driver Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="vehicle"
                value={newDriver.vehicle}
                onChange={handleDriverChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Vehicle"
              />
            </div>
            <div className="mb-4">
              <select
                name="status"
                value={newDriver.status}
                onChange={handleDriverChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button
              onClick={addDriverHandler}
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md"
            >
              Add Driver
            </button>
          </div>
        )}

        {/* Dashboard Boxes */}
        {currentSection === 'dashboard' && (
          <div className="grid grid-cols-2 gap-6">
            {/* Box 1: Approved Requests */}
            <div
              className="bg-green-700 p-6 rounded-md text-white cursor-pointer"
              onClick={() => handleNavigation('viewRequests', 'Approved')}
            >
              <h3 className="text-lg font-semibold">Approved Requests</h3>
              <div className="mt-4 text-2xl font-bold">{approvedRequests}</div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">View Details</button>
            </div>

            {/* Box 2: Rejected Requests */}
            <div
              className="bg-red-700 p-6 rounded-md text-white cursor-pointer"
              onClick={() => handleNavigation('viewRequests', 'Rejected')}
            >
              <h3 className="text-lg font-semibold">Rejected Requests</h3>
              <div className="mt-4 text-2xl font-bold">{rejectedRequests}</div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">View Details</button>
            </div>

            {/* Box 3: Driver On The Way */}
            <div
              className="bg-yellow-700 p-6 rounded-md text-white cursor-pointer"
              onClick={() => handleNavigation('viewRequests', 'On the way')}
            >
              <h3 className="text-lg font-semibold">Driver On The Way</h3>
              <div className="mt-4 text-2xl font-bold">{onTheWayRequests}</div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">View Details</button>
            </div>

            {/* Box 4: Completed Requests */}
            <div
              className="bg-blue-700 p-6 rounded-md text-white cursor-pointer"
              onClick={() => handleNavigation('viewRequests', 'Completed')}
            >
              <h3 className="text-lg font-semibold">Completed Requests</h3>
              <div className="mt-4 text-2xl font-bold">{completedRequests}</div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">View Details</button>
            </div>

            {/* Box 5: Total Drivers */}
            <div
              className="bg-gray-700 p-6 rounded-md text-white cursor-pointer"
              onClick={() => handleNavigation('viewDrivers')}
            >
              <h3 className="text-lg font-semibold">Total Drivers</h3>
              <div className="mt-4 text-2xl font-bold">{drivers.length}</div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">View Details</button>
            </div>
          </div>
        )}

        {/* Render Content Based on Current Section */}
        {currentSection === 'viewRequests' && renderRequestDetails()}
        {currentSection === 'viewDrivers' && renderDriverDetails()}
      </div>
    </div>
  );
}
