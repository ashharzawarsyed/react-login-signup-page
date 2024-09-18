import React, { useState } from "react";
import BackgroundContainer from "./BackgroundContainer";
import FormCard from "./FormCard";
import ImageSection from "./ImageSection";

const RegisterPage = ({ setRedirectToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("match");
    } else {
      //cl
    }
  };

  // Toggle functions for both passwords
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <BackgroundContainer>
      {/* FOR SHAPES */}
      <div className="background">
        <div className="shape"></div>
      </div>
      {/* FOR SHAPES UP */}
      <div className="row w-100 m-0">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center ps-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-4">Create an Account</h1>
            <p>
              Already have an account?{" "}
              <a
                href="#!"
                onClick={() => setRedirectToRegister(false)}
                className="text-primary"
              >
                Log In here!
              </a>
            </p>
          </div>
          <ImageSection />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <FormCard title="Register" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mb-3 position-relative">

              {/* Make reusable component jb zarorat ho */}
              <input
                type={showPassword ? "text" : "password"} 
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye-off"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.94 17.94A10 10 0 0121 12a10 10 0 00-3.07-7.07M1 1l22 22"></path>
                    <path d="M10.61 10.61a2 2 0 002.77 2.77"></path>
                    <path d="M9.37 5.51A9.998 9.998 0 0121 12c-1.05 3.8-4.49 6.73-8.61 6.96"></path>
                    <path d="M1 1l22 22"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12S4.5 3 12 3s11 9 11 9-4.5 9-11 9S1 12 1 12z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </span>
            </div>

            <div className="form-group mb-3 position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"} 
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showConfirmPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye-off"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.94 17.94A10 10 0 0121 12a10 10 0 00-3.07-7.07M1 1l22 22"></path>
                    <path d="M10.61 10.61a2 2 0 002.77 2.77"></path>
                    <path d="M9.37 5.51A9.998 9.998 0 0121 12c-1.05 3.8-4.49 6.73-8.61 6.96"></path>
                    <path d="M1 1l22 22"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12S4.5 3 12 3s11 9 11 9-4.5 9-11 9S1 12 1 12z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </span>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Register
            </button>
            <div className="text-center mt-3 mb-5">
              <a
                href="#!"
                onClick={() => setRedirectToRegister(false)}
                className="text-primary"
              >
                Already have an account? Log In
              </a>
            </div>
          </FormCard>
        </div>
      </div>
    </BackgroundContainer>
  );
};

export default RegisterPage;
