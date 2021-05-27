import React from "react";
import _ from "lodash";

const Discover = () => {
  const cardData = [
    {
      url: "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=1200",
      title: "Featured collections: Wanderlust",
      subTitle: "Travel from with Online Experiences",
    },
    {
      url: "https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=1200",
      title: "Online Experiences",
      subTitle: "Live, interactive activities led by host",
    },
    {
      url: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=1200",
      title: "Experiences",
      subTitle: "Local things to do, wherever you are",
    },
  ];
  return (
    <div className="container my-4">
      <h2>Discover Experiences</h2>
      <h5 className="my-1">
        Unique activities with local experts - in person or online.
      </h5>
      <div className="row g-3 mt-4">
        {_.map(cardData, (item, id) => (
          <div key={id} className="col-12 col-md-4">
            <img
              src={item.url}
              alt=""
              height="400px"
              width="100%"
              className="rounded"
            />
            <h6 className="my-1">{item.title}</h6>
            <p className="m-0">{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
