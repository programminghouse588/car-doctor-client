import { useContext, useState } from "react";
import logo from "../../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Firebase/Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result?.user);
        toast.success("User logged out Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className="bg-gray-800 md:py-3 py-2 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 lg:mr-40">
              <img className="md:w-20 w-16" src={logo} alt="" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-3">
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn btn-primary text-lg text-white font-bold italic"
              >
                Log Out
              </button>
            ) : (
              <div className="ml-4 flex items-center md:ml-6">
                <NavLink to="/login">
                  <button className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-xl italic font-semibold">
                    Log in
                  </button>
                </NavLink>

                <NavLink to="/signUp">
                  <button className="ml-4 text-gray-300 bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-xl font-semibold italic text-center">
                    Sign up
                  </button>
                </NavLink>
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
          >
            About
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
          >
            Contact
          </a>

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-primary text-lg text-white font-bold italic"
            >
              Log Out
            </button>
          ) : (
            <>
              <NavLink to="/login">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xl font-semibold italic">
                  Log in
                </button>
              </NavLink>

              <NavLink to="/signUp">
                <button className="text-gray-300 bg-indigo-600 hover:bg-indigo-700 block px-3 py-2 rounded-md text-xl italic font-semibold">
                  Sign up
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
