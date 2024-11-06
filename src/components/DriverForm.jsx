import React, { useState } from 'react';

export default function DriverForm() {
  const [formData, setFormData] = useState({
    driverId: '',
    name: '',
    mobileNumber: '',
    email: '',
    address: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (e.g., API call or adding driver data to a database)
    setTimeout(() => {
      setIsSubmitting(false);
      const isSuccess = true;  // Simulate success or failure
      setSubmissionStatus(isSuccess ? 'Driver added successfully!' : 'Error adding driver');
      
      if (isSuccess) {
        // Optionally reset form data after successful submission
        setFormData({
          driverId: '',
          name: '',
          mobileNumber: '',
          email: '',
          address: '',
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
      <h2 className="text-2xl font-bold text-center mb-6">Add Driver</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="driverId" className="block text-white">Driver ID</label>
          <input
            type="text"
            id="driverId"
            name="driverId"
            placeholder="Driver ID"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.driverId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mobileNumber" className="block text-white">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.mobileNumber}
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
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-white">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Add Driver'}
        </button>

        {submissionStatus && (
          <div className={`mt-4 ${submissionStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {submissionStatus}
          </div>
        )}
      </form>
    </div>
  );
}
