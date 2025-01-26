import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchDetails } from "../store/AddSlice";
import { auth } from "../auth/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    // Check if email is empty
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
    }

    // Check if password is empty
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return; // Stop form submission if there are errors
    }

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        dispatch(fetchDetails(user.uid));
        navigate("/home");
      }
    } catch (error) {
      console.error("Error logging in: ", error.message);
      setErrors({ general: "Invalid email or password" });
    }
  };

  return (
    <div className="m-2 md:mr-[35rem]">
      <form onSubmit={loginSubmit} className="border-2 border-black w-[100%] mt-60 flex flex-col justify-center items-center p-5 gap-5 rounded-sm bg-white font-bold">
        <h3>Login</h3>
        <div className="flex flex-col self-start font-bold">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-black w-[20rem] rounded-sm p-2"
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>
        <div className="flex flex-col self-start">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-black w-[20rem] rounded-sm p-2"
          />
          {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
        </div>
        {errors.general && <span className="text-red-500 text-xs">{errors.general}</span>}
        <button type="submit" className="bg-black text-white p-2 rounded-sm">Login</button>
      </form>
    </div>
  );
}

export default Login;
