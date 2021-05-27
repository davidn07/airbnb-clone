import React from "react";
import _ from "lodash";

const Explore = () => {
  const locations = [
    {
      image:
        "https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240",
      title: "Lonavala",
      distance: "1.5-hour drive",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/0810e005-87d3-4188-b95c-2d7fa2fc957b.jpg?im_q=medq&im_w=240",
      title: "Karjat",
      distance: "1-hour drive",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/b654084a-1abc-4819-ab37-8c9471bfe917.jpg?im_q=medq&im_w=240",
      title: "Mumbai",
      distance: "15-min drive",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240",
      title: "Alibag",
      distance: "1.5-hour drive",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240",
      title: "Lonavala",
      distance: "1.5-hour drive",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/0810e005-87d3-4188-b95c-2d7fa2fc957b.jpg?im_q=medq&im_w=240",
      title: "Karjat",
      distance: "1-hour drive",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/b654084a-1abc-4819-ab37-8c9471bfe917.jpg?im_q=medq&im_w=240",
      title: "Mumbai",
      distance: "15-min drive",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240",
      title: "Alibag",
      distance: "1.5-hour drive",
    },
  ];
  const images = [
    {
      url: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720",
      title: "Outdoor getaways",
    },
    {
      url: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720",
      title: "Unique stays",
    },
    {
      url: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720",
      title: "Entire homes",
    },
    {
      url: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720",
      title: "Pets allowed",
    },
  ];
  return (
    <div className="container py-3">
      <h2 className="m-0">Explore nearby</h2>
      <div className="row g-3 mt-3">
        {_.map(locations, (location, id) => (
          <div className="col-md-6 col-lg-3 col-12 d-flex align-items-center">
            <img
              src={location.image}
              alt="image 1"
              height="60"
              width="60"
              className="rounded me-3"
            />
            <div>
              <h6>{location.title}</h6>
              <p className="m-0">{location.distance}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="m-0 my-4">Live anywhere</h2>
      <div className="row g-3">
        {_.map(images, (image, id) => (
          <div key={id} className="col-12 col-lg-3 col-md-6">
            <img
              src={image.url}
              alt="Image"
              height="300px"
              width="100%"
              className="rounded"
            />
            <h5 className="my-2">{image.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
