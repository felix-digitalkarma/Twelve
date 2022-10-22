import React, { useState } from "react";
import styled from "styled-components";
import { useAuthStore } from "../contexts/auth";

const Wrapper = styled.div`
  padding: 20px;
`;

// Test Comment
export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const test = 4 * 3;

  const [state, actions] = useAuthStore();

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(formData);
  };

  return (
    <Wrapper>
      <h1>Login Form {test}</h1>
      <p>Currently Authenticated: {`${state.isAuthenticated}`}</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(e)}
          autoComplete="false"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => onChange(e)}
          required
          autoComplete="false"
          placeholder="Password"
        />
        <input type="submit" value="Submit" />
      </form>
    </Wrapper>
  );
};

export default Login;
