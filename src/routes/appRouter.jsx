import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/index.jsx";
import { AuthProvider } from "../context/authContext/auth.jsx";
import Home from "../components/home/index.jsx";
import ProtectedAuthRoute from "./protectedAuthRoute.jsx";
import PatientInfoForm from "../components/patientInfoForm/index.jsx";

const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedAuthRoute>
                <Home />
              </ProtectedAuthRoute>
            }
          />
          <Route
            path="/personal-info"
            element={
              // <ProtectedAuthRoute>
              <PatientInfoForm />
              // </ProtectedAuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;
