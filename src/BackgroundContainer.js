import React from "react";

const backgroundStyle = {
  backgroundColor: "rgba(255,255,255,0.13)",
  height: "100vh",
};

const BackgroundContainer = ({ children }) => (
  <div className="container-fluid d-flex" style={backgroundStyle}>
    {children}
  </div>
);

export default BackgroundContainer;
