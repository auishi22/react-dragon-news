import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const { title, image_url, details, _id } = news;
    return (
      <div className="card card-compact bg-base-100 shadow-xl border-2">
        <figure>
          <img className="card-body" src={image_url} />
        </figure>
        <div className=" p-6">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link className="text-blue-600 font-bold" to={`/news/${_id}`}>
                Read more...
              </Link>
            </p>
          ) : (
            <p> {details} </p>
          )}
        </div>
      </div>
    );
};

export default NewsCard;