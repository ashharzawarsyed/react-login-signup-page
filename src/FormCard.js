import React from "react";

const FormCard = ({ title, children, onSubmit }) => (
  <div
    className="card p-4 shadow"
    style={{
      width: "100%",
      maxWidth: "400px",
      backgroundColor: "rgba(255,255,255,0.13)",
    }}
  >
    <h4 className="mb-4 text-center">{title}</h4>
    <form onSubmit={onSubmit}>{children}</form>
  </div>
);

export default FormCard;
