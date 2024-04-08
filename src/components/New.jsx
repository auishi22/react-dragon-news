import React from "react";

const New = ( {news} ) => {
  const { title, thumbnail_url, image_url, details } = news;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-6 pt-10">
          <img src={image_url} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
