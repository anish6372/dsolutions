import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Solution from './Solution';
import Contact from './Contact';
import Layout from './Layout';
import Pricing from './Pricing';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/crm" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Navigate to="/crm" />} /> {/* Redirect root to /crm */}
          <Route path="*" element={<Navigate to="/crm" />} /> {/* Redirect unmatched routes to /crm */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
