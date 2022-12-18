import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        credentials
      );
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      localStorage.setItem(
        "user",
        JSON.stringify({ _id: res.data._id, username: res.data.username })
      );
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
      <div className="nav-back"></div>
      <div className="container pb-5 auth">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              minLength={8}
              onChange={handleChange}
            />
          </div>
          <span>Don't have an account? </span>
          <Link to="/register">Sign up</Link>
          <br /> <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
