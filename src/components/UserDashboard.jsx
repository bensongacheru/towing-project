import React, { useState } from 'react';

const UserDashboard = () => {
  const [vehicleDetails, setVehicleDetails] = useState({
    make: '',
    model: '',
    year: '',
    registration: '',
  });

  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [requestStatus, setRequestStatus] = useState('');
  const [review, setReview] = useState('');
  const [complaint, setComplaint] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('requestService');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [requestHistory, setRequestHistory] = useState([]);

  // Sample data for services
  const services = [
    { id: 1, type: 'towing', name: 'Car Towing' },
    { id: 2, type: 'mechanical', name: 'Flat Tire Fix' },
    { id: 3, type: 'towing', name: 'Heavy Duty Towing' },
    { id: 4, type: 'mechanical', name: 'Engine Diagnostics' },
    { id: 5, type: 'mechanical', name: 'Battery Jumpstart' },
  ];

  const handleVehicleDetailsChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleServiceRequest = () => {
    if (!serviceType) {
      alert('Please select a service first!');
      return;
    }

    setRequestStatus('Request sent!');
    setPaymentStatus('Pending'); // Set payment status to pending initially

    const newRequest = {
      id: Date.now(),
      service: serviceType,
      status: 'Requested',
      paymentStatus: 'Pending',
      review: review || 'No review provided', // Include review
      complaint: '', // Initialize empty complaint
      date: new Date().toLocaleString(), // Add date of request
    };

    setRequestHistory((prevHistory) => [...prevHistory, newRequest]);
  };

  const handlePayment = (requestId) => {
    setPaymentStatus('Completed');
    setRequestHistory((prevHistory) =>
      prevHistory.map((request) =>
        request.id === requestId ? { ...request, paymentStatus: 'Completed' } : request
      )
    );
    alert('Payment successful!');
  };

  const handleSubmitReview = (requestId) => {
    setRequestHistory((prevHistory) =>
      prevHistory.map((request) =>
        request.id === requestId ? { ...request, review } : request
      )
    );
    alert('Review submitted!');
  };

  const handleSubmitComplaint = (requestId) => {
    setRequestHistory((prevHistory) =>
      prevHistory.map((request) =>
        request.id === requestId ? { ...request, complaint } : request
      )
    );
    alert('Complaint submitted!');
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'requestService':
        return (
          <div>
            <h3 className="text-lg">Request Service</h3>

            {/* Vehicle Details Form */}
            <div className="mt-4">
              <h4 className="text-md">Vehicle Details</h4>
              <input
                type="text"
                name="make"
                placeholder="Make"
                className="p-2 border mt-2 w-full"
                value={vehicleDetails.make}
                onChange={handleVehicleDetailsChange}
              />
              <input
                type="text"
                name="model"
                placeholder="Model"
                className="p-2 border mt-2 w-full"
                value={vehicleDetails.model}
                onChange={handleVehicleDetailsChange}
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                className="p-2 border mt-2 w-full"
                value={vehicleDetails.year}
                onChange={handleVehicleDetailsChange}
              />
              <input
                type="text"
                name="registration"
                placeholder="Registration Number"
                className="p-2 border mt-2 w-full"
                value={vehicleDetails.registration}
                onChange={handleVehicleDetailsChange}
              />
            </div>

            {/* Search field for services */}
            <input
              type="text"
              placeholder="Search for Towing or Mechanical services"
              className="p-2 border mt-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Display filtered services */}
            <div className="mt-4">
              {filteredServices.length > 0 ? (
                filteredServices.map((service) => (
                  <div key={service.id} className="border-b py-2">
                    <button
                      onClick={() => setServiceType(service.name)}
                      className="w-full text-left p-2 hover:bg-gray-200 rounded"
                    >
                      {service.name}
                    </button>
                  </div>
                ))
              ) : (
                <p>No services found.</p>
              )}
            </div>

            {/* Selected service */}
            {serviceType && (
              <div className="mt-4">
                <h4 className="text-lg">Selected Service: {serviceType}</h4>
                <button
                  onClick={handleServiceRequest}
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                >
                  Request Service
                </button>
              </div>
            )}
          </div>
        );

      case 'review':
        return (
          <div>
            <h4 className="text-md">Leave a Review</h4>
            <textarea
              placeholder="Write your review..."
              className="p-2 border mt-2 w-full"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button
              onClick={() => handleSubmitReview(Date.now())}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            >
              Submit Review
            </button>
          </div>
        );

      case 'complaint':
        return (
          <div>
            <h4 className="text-md">File a Complaint</h4>
            <textarea
              placeholder="Write your complaint..."
              className="p-2 border mt-2 w-full"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
            />
            <button
              onClick={() => handleSubmitComplaint(Date.now())}
              className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            >
              Submit Complaint
            </button>
          </div>
        );

      case 'payment':
        return (
          <div>
            {paymentStatus === 'Pending' ? (
              <button
                onClick={() => handlePayment(Date.now())}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Pay Now
              </button>
            ) : (
              <p>Payment Status: {paymentStatus}</p>
            )}
          </div>
        );

      case 'requestHistory':
        return (
          <div>
            <h3 className="text-lg">Request History</h3>
            <div className="mt-4">
              {requestHistory.length === 0 ? (
                <p>No requests made yet.</p>
              ) : (
                requestHistory.map((request) => (
                  <div key={request.id} className="border-b py-2">
                    <h4 className="font-bold">Service: {request.service}</h4>
                    <p>Status: {request.status}</p>
                    <p>Payment Status: {request.paymentStatus}</p>
                    <p>Requested On: {request.date}</p>
                    <p>Review: {request.review}</p>
                    {request.complaint && <p>Complaint: {request.complaint}</p>}
                    <button
                      onClick={() => setComplaint('')}
                      className="bg-red-500 text-white py-2 px-4 rounded mt-2"
                    >
                      Add Complaint
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        );

      default:
        return <div>Please select an option from the sidebar</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4 min-h-screen">
        <h3 className="text-lg font-bold">Dashboard Menu</h3>
        <ul className="mt-6 space-y-4">
          <li>
            <button
              onClick={() => setActiveSection('requestService')}
              className={`w-full text-left p-2 hover:bg-gray-700 rounded ${activeSection === 'requestService' ? 'bg-gray-700' : ''}`}
            >
              Request Service
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('requestHistory')}
              className={`w-full text-left p-2 hover:bg-gray-700 rounded ${activeSection === 'requestHistory' ? 'bg-gray-700' : ''}`}
            >
              Request History
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('review')}
              className={`w-full text-left p-2 hover:bg-gray-700 rounded ${activeSection === 'review' ? 'bg-gray-700' : ''}`}
            >
              Leave a Review
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('complaint')}
              className={`w-full text-left p-2 hover:bg-gray-700 rounded ${activeSection === 'complaint' ? 'bg-gray-700' : ''}`}
            >
              File a Complaint
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('payment')}
              className={`w-full text-left p-2 hover:bg-gray-700 rounded ${activeSection === 'payment' ? 'bg-gray-700' : ''}`}
            >
              Payment
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-3/4 p-4">
        {renderSection()}
      </div>
    </div>
  );
};

export default UserDashboard;
