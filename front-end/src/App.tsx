import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchCarPage from "./pages/SearchCarPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/registerPage";
import DashboardPage from "./pages/dashboardPage";
import { CarContextProvider } from "./context/CarContext";
import CarDashboardContextProvider from "./context/CarContextDashbaord";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./component/privateRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <AuthProvider>
      <CarContextProvider>
        <CarDashboardContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cari-mobil" element={<SearchCarPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route 
                path="/admin/dashboard" 
                element={
                  <PrivateRoute allowedRoles={['admin', 'superadmin']}>
                    <DashboardPage />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </Router>
        </CarDashboardContextProvider>
      </CarContextProvider>
    </AuthProvider>
  );
}

export default App;
