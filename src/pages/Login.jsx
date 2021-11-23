import React, { useRef } from "react";
import "../styles/Login.scss";

import mainLogo from "../assets/logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };
  return (
    <div className="login">
      <div className="form-container">
        <img src={mainLogo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            className="input input_email"
            placeholder="avipez@gmail.com"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input input-password"
            placeholder="********"
          />
          <button
            className="primary_button login-button"
            onClick={handleSubmit}
          >
            Login
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary_button signup_button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
