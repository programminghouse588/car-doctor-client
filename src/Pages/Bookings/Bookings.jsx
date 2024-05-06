import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <table className="min-w-full mx-4 md:mx-10 divide-y divide-gray-200 mt-20 overflow-x-auto">
      <thead>
        <tr>
          <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xl font-bold italic text-gray-800 uppercase tracking-wider">
            Image
          </th>
          <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xl font-bold italic text-gray-800 uppercase tracking-wider">
            Service Name
          </th>
          <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xl font-bold italic text-gray-800 uppercase tracking-wider">
            Price
          </th>
          <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xl before:font-bold italic text-gray-800 uppercase tracking-wider">
            Date
          </th>
          <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xl font-bold italic text-gray-800 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {bookings.map((booking) => (
          <tr key={booking._id}>
            <td className="px-4 md:px-6 py-4">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 md:h-20 md:w-20 rounded-3xl"
                  src={booking.img}
                  alt=""
                />
              </div>
            </td>
            <td className="px-4 md:px-6 py-4 text-lg md:text-[22px] font-semibold italic whitespace-nowrap">
              {booking.title}
            </td>
            <td className="px-4 md:px-6 py-4 text-lg md:text-[22px] font-semibold italic whitespace-nowrap">
              {booking.price}
            </td>
            <td className="px-4 md:px-6 py-4 text-lg md:text-[22px] font-semibold italic whitespace-nowrap">
              {booking.date}
            </td>

            <td className="px-4 md:px-6 py-4 whitespace-nowrap">
              <button className="px-3 md:px-4 py-2 md:py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                Edit
              </button>
              <button className="ml-2 px-3 md:px-4 py-2 md:py-3 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Bookings;
