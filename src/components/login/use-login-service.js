import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../context/authContext/auth.jsx";
import { useContext, useEffect } from "react";
import { auth } from "../../firebase/firebaseConfig.js";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();
const useLoginService = () => {
  const navigate = useNavigate();
  const { authUser, isLoading } = useContext(AuthContext);
  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      console.log("hello12222", response);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("hello", authUser);
  useEffect(() => {
    console.log({ isLoading, authUser }, "Auth state");
    if (!isLoading && authUser) {
      navigate("/");
    }
  }, [isLoading, authUser]);

  return {
    signInWithGoogle,
  };
};

export default useLoginService;
