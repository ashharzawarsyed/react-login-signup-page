import React from "react";
import picture from "./Picture.png";

const ImageSection = () => (
  <div
    className="d-flex justify-content-center align-items-center ms-5"
    style={{ height: "50vh" }}
  >
    <img
      src={picture}
      alt="Illustration"
      className="img-fluid"
      style={{ maxWidth: "80%", height: "auto" }}
    />
  </div>
);

export default ImageSection;
