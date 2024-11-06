import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserDashboard() {
  const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    destination: '',
    vehicleDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Simulating fetching user requests from an API or state
  useEffect(() => {
    // Here you would make an API call to fetch the user's service requests
    setRequests([
      { id: 1, pickupLocation: 'Location 1', status: 'Pending' },
      { id: 2, pickupLocation: 'Location 2', status: 'Pending' },
    ]);
  }, []);

  const handleRequestChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending the request to an API
    setTimeout(() => {
      setIsSubmitting(false);
      setRequests([...requests, { ...formData, status: 'Pending' }]);
      setSubmissionStatus('Request submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        pickupLocation: '',
        destination: '',
        vehicleDetails: ''
      });
    }, 2000);
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">User Dashboard</h2>

      <h3 className="text-xl font-semibold text-center mb-4">Your Requests</h3>
      <ul>
        {requests.map((request) => (
          <li key={request.id} className="bg-gray-700 p-4 rounded-lg mb-2">
            <p><strong>Pickup Location:</strong> {request.pickupLocation}</p>
            <p><strong>Status:</strong> {request.status}</p>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold text-center mt-6 mb-4">Book a New Ride</h3>
      <form onSubmit={handleSubmitRequest} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleRequestChange}
          className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleRequestChange}
          className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleRequestChange}
          className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white"
          required
        />
        <input
          type="text"
          name="pickupLocation"
          placeholder="Pickup Location"
          value={formData.pickupLocation}
          onChange={handleRequestChange}
          className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white"
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleRequestChange}
          className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white"
          required
        />
        <input
          type="text"
          name="vehicleDetails"
          placeholder="Vehicle Details (Make/Model)"
          value={formData.vehicleDetails}
          onChange={handleRequestChange}
          className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white"
          required
        />
        <button
          type="submit"
          className={`w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Book Now'}
        </button>
      </form>

      {submissionStatus && <p className="mt-4 text-green-500">{submissionStatus}</p>}
    </div>
  );
}
