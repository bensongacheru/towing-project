import React, { useState } from 'react';

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    destination: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null); // To handle success or failure status

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      const isSuccess = true;  // Simulate success or failure
      setRequestStatus(isSuccess ? 'Request submitted successfully!' : 'Error submitting request');
      if (isSuccess) {
        // Optionally reset form data after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          pickupLocation: '',
          destination: '',
        });
      }
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <h2 className="text-2xl font-bold text-center mb-6">Request Towing Service</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            aria-label="Your full name"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            aria-label="Your email address"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-white">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            aria-label="Your phone number"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="^\+?\d{1,4}?[.-\s]?\(?\d{1,3}?\)?[.-\s]?\d{1,4}?[.-\s]?\d{1,4}?[.-\s]?\d{1,9}$"
            title="Please enter a valid phone number"
          />
        </div>

        <div>
          <label htmlFor="pickupLocation" className="block text-white">Pickup Location</label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            placeholder="Pickup Location"
            aria-label="Pickup location"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="destination" className="block text-white">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Destination"
            aria-label="Destination address"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <i className="fa fa-spinner fa-spin"></i> // A spinner icon
          ) : (
            'Book Now'
          )}
        </button>

        {requestStatus && (
          <div className={`mt-4 ${requestStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {requestStatus}
          </div>
        )}
      </form>
    </div>
  );
}
