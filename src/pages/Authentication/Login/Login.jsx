import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    setSuccess("");

    // Password Validation
    if (password.length < 6) {
      setError("Password Can't be less then 6 Characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Your Password Should Contain At Least One Uppercase Character");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Your Password Should Contain At Least One Lowercase Character");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("Your Password Should Contain At Least One Numeric Character");
      return;
    } else if (!/[#?!@%&*-]/.test(password)) {
      setError("Your Password Should Contain At Least One Special Character");
      return;
    }

    signInUser(email, password)
      .then(() => {
        setSuccess("Successfully Signed In");
        toast("Successfully Signed In", {
          style: {
            borderRadius: "30px",
            background: "#052e16",
            color: "#fff",
          },
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        setSuccess("Successfully Signed In");
        toast("Successfully Signed In", {
          style: {
            borderRadius: "30px",
            background: "#052e16",
            color: "#fff",
          },
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="fitting space-top-bottom space-y-3 md:space-y-5 flex flex-col items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <h3 className="text-center font-bold text-2xl md:text-5xl">Log In!</h3>
      <div className="h-1 w-20 mx-auto bg-blue-500"></div>
      <form
        onSubmit={handleLogIn}
        className="md:w-2/3 lg:w-1/2 border-2 border-gray-300 md:m-7  p-3 md:p-7 rounded-[32px]"
      >
        <input
          className="w-full mt-1 mb-2 md:mb-5 border border-gray-400 py-2 px-3 rounded-full outline-none"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          className="w-full mt-1 mb-2 md:mb-5 border border-gray-400 py-2 px-3 rounded-full outline-none"
          type="password"
          name="password"
          placeholder="Type a Password"
          required
        />

        {error ? (
          <div className="font-semibold text-red-600 mt-5">{error}</div>
        ) : (
          <div className="font-semibold text-green-600 mt-5">{success}</div>
        )}

        <button className="btn rounded-full w-full md:mt-1 bg-blue-500 hover:bg-[#071a07] text-white font-semibold border-none">
          Log In
        </button>

        <p className="text-center font-semibold text-lg my-1 md:my-3">Or,</p>

        <span onClick={handleGoogleSignIn} className="btn w-full rounded-full">
          <FcGoogle></FcGoogle>Continue With Google
        </span>
      </form>
      <p className="text-sm sm:text-base md:text-lg">
        New Here? Please{" "}
        <Link className="underline font-medium text-blue-500" to="/register">
          Register
        </Link>
      </p>
      <div className="h-1 w-40 mx-auto bg-blue-500"></div>
    </div>
  );
};

export default LogIn;
