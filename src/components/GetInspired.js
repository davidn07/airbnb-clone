import React from "react";

const GetInspired = () => {
  return (
    <div className="container mt-5">
      <div className="card border-0 rounded">
        <img
          className="card-img border-radius-30"
          src="https://a0.muscache.com/im/pictures/38100f6a-9a35-45b8-a503-cfe384d953b5.jpg?im_w=2560"
          alt="Card Bg"
          style={{ height: "450px" }}
        ></img>
        <div className="card-img-overlay">
          <div className="container h-100 d-flex flex-column justify-content-center align-items-start">
            <h1 className="display-4 input-width ">The Greatest Outdoors</h1>
            <h5 className="my-4">Wishlists curated by Airbnb</h5>
            <button className="btn btn-dark">Get inspired</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInspired;
