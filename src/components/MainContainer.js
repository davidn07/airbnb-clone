import React from "react";

const MainContainer = () => {
  return (
    <div className="container h-100">
      <div className="d-flex flex-column justify-content-center align-items-start h-100">
        <div className="d-flex align-items-center">
          <h4 className="m-0 text-dark">Airbnb</h4>
          <div className="px-2 py-1 mx-3 rounded-5 bg-dark text-white rounded">
            <h5 className="m-0">2021</h5>
          </div>
        </div>
        <h2 className="text-dark input-width my-4">
          Introducing 100+ upgrades across our entire service
        </h2>
        <button className="btn btn-dark text-white">Learn what's new</button>
      </div>
    </div>
  );
};

export default MainContainer;
