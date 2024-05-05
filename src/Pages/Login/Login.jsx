import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  // Location
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("User logged in Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .then((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl mb-3 italic text-center font-bold">
              Login Now
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold italic">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold italic mt-1">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter Password"
                  className="input input-bordered"
                />

                <a
                  href="#"
                  className="label-text-alt text-lg mt-3 italic text-blue-700 hover: font-semibold link link-hover"
                >
                  Lost password?
                </a>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary text-xl italic"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center font-semibold text-xl italic">
              New to Car Doctors{" "}
              <Link className="text-orange-600 font-bold" to="/signUp">
                Sign Up here
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
