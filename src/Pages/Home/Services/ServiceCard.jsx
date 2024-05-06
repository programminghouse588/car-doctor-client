import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-full h-full mt-6 mx-4 mr-6 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold text-slate-800">
          {title}
        </h2>
        <p className="text-xl font-bold mt-2 text-orange-500">
          Price: ${price}
        </p>

        <Link to={`/checkout/${_id}`}>
          <button className="text-white w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
