import React, { useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchDetails } from "../store/AddSlice";
import { auth } from "../auth/firebase";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        dispatch(fetchDetails(user.uid));
        navigate("/home");
      }
    } catch (error) {
      console.error("Error logging in: ", error.message);
    }
  };

  return (
    <div className="mr-2 md:mr-[35rem]">
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
      </div>
      <button type="submit" className="bg-black text-white p-2 rounded-sm">Login</button>
    </form>
    </div>
  );
}

export default Login;
