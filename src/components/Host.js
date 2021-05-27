import React from "react";

const Host = () => {
  return (
    <div className="container">
      <div className="card rounded border-0 mt-5">
        <img
          src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560"
          className="card-img border-radius-30"
          alt="Card bg"
          height="450px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start">
          <h1 className="text-white">Become a host</h1>
          <h5 className="text-white my-3 input-width">
            Earn extra income and unlock new opportunities by sharing your
            space.
          </h5>
          <button className="btn bg-white text-dark">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Host;
