import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";
import axios from "axios";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("hello");
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log("rh: login success: res ", res);
        localStorage.setItem("authToken", res.data.payload);
        console.log(res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.error("rh: login failed: err:", err.message);
        localStorage.removeItem("authToken");
      });
    // axiosWithAuth()
    //   .post("/login", credentials)
    //   .then((res) => {
    //     console.log("rh: login success: res: ", res);
    //     localStorage.setItem("authToken", res.data.payload);
    //     props.history.push("/protected");
    //   })
    //   .catch((err) => {
    //     console.error("rh: login failed: err ", err.message);
    //     localStorage.removeItem("authToken");
    //   });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={loginHandler}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <BtnStyled> Login</BtnStyled>
      </form>
    </>
  );
};

export default Login;

const BtnStyled = styled.button`
  background-color: red;
`;
