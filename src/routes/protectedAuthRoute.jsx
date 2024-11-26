/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { AuthContext } from "../context/authContext/auth.jsx";
import { Navigate } from "react-router-dom";

const ProtectedAuthRoute = ({ children }) => {
  const { authUser, isLoading } = useContext(AuthContext);
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedAuthRoute;
