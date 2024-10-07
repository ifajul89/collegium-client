import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

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

    // Name Validation
    if (name.length < 3) {
      setError("Please Enter a Valid Name");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="fitting space-top-bottom space-y-3 md:space-y-5 flex flex-col items-center">
      <h3 className="text-center font-bold text-2xl md:text-5xl">Register!</h3>
      <div className="h-1 w-20 mx-auto bg-blue-500"></div>
      <form
        onSubmit={handleRegister}
        className="md:w-2/3 lg:w-1/2 border border-gray-400 md:m-7  p-3 md:p-7 rounded-[32px]"
      >
        <input
          className="w-full mt-1 mb-2 md:mb-5 border border-gray-400 py-2 px-3 rounded-full outline-none"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          className="w-full mt-1 mb-2 md:mb-5 border border-gray-400 py-2 px-3 rounded-full outline-none"
          type="text"
          name="photo"
          placeholder="Photo URL"
        />

        <input
          className="w-full mt-1 mb-2 md:mb-5 border border-gray-400 py-2 px-3 rounded-full outline-none"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          className="w-full mt-1 border border-gray-400 py-2 px-3 rounded-full outline-none"
          type="password"
          name="password"
          placeholder="Type a Password"
          required
        />

        {error && (
          <div className="font-semibold text-red-600 mt-5">{error}</div>
        )}

        <div className="mt-5">
          <input
            className="mr-1"
            type="checkbox"
            name="terms"
            id="terms"
            required
          />
          <label htmlFor="terms">Accept Our Terms and Conditions</label>
        </div>

        <button className="btn rounded-full w-full mt-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold border-none">
          Register
        </button>

        <p className="text-center font-semibold text-lg my-1 md:my-3">Or,</p>

        <span onClick={handleGoogleSignIn} className="btn w-full rounded-full">
          <FcGoogle></FcGoogle>Continue With Google
        </span>
      </form>
      <p className="text-sm sm:text-base md:text-lg">
        Already Have an Account? Please{" "}
        <Link className="underline font-medium text-blue-500" to="/login">
          Log In
        </Link>
      </p>
      <div className="h-1 w-40 mx-auto bg-blue-500"></div>
    </div>
  );
};

export default Register;
