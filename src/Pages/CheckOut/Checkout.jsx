import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      name,
      email,
      date,
      service_id: _id,
      price,
      title,
      img,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Service Booked Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="bg-white border-2 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-2xl font-bold">Book {title} Service</h3>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-toggle="product-modal"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="p-6 space-y-6">
        <form onSubmit={handleOrder}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="name"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-lg  rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Email"
                defaultValue={user?.email}
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="date"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-base font-semibold rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                defaultValue={"$ " + price}
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="message"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Your Message"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <input
              className="hover:shadow-form w-10/12 mt-6 rounded-md bg-[#FF3811] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              type="submit"
              value="Book Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
