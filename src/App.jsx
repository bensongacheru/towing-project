import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import RequestForm from './components/RequestForm';
import DriverForm from './components/DriverForm';  // Import the DriverForm component
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/driver-form" element={<DriverForm />} />  {/* Add the route for DriverForm */}
      </Routes>
    </Router>
  );
}

export default App;
