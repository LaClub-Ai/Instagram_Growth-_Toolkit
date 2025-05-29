import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Login, Analytics, Accounts } from './views';
import Navbar from './components/Navbar';
import  Footer  from './components/Footer';
import { AuthProvider, AuthContext } from './contexts/AuthContext';

const AppContent: React.FC = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Login />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <Router>
      <AppContent />
    </Router>
  </AuthProvider>
);

export default App;