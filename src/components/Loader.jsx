import React from "react";

const Loader = () => {
  return (
    <>
      <div className="spinner-border text-info text-center mx-auto" role="status">
        <span className="visually-hidden mx-auto">Loading...</span>
      </div>
    </>
  );
};

export default Loader;
