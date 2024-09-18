import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

export default function App() {
  const [redirectToRegister, setRedirectToRegister] = useState(false);

  return (
    <>
      {redirectToRegister ? (
        // State lift ker k pass ki ha
        <RegisterPage setRedirectToRegister={setRedirectToRegister} />
      ) : (
        <LoginPage setRedirectToRegister={setRedirectToRegister} />
      )}
    </>
  );
}
