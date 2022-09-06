import { Link } from "react-router-dom";

const Card = ({ id, title, description, filename }) => {
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/movie/${id}`}>
            <button className="btn btn-primary">Watch Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
