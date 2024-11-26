import React from "react";
import useLoginService from "./use-login-service.js";

const Login = () => {
  const { signInWithGoogle } = useLoginService();
  return (
    <>
      <button
        className="border-black border-[1px] p-1 cursor-pointer"
        onClick={signInWithGoogle}
      >
        Login with Google
      </button>
    </>
  );
};

export default Login;
