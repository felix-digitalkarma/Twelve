import React, { useState } from "react";
import styled from "styled-components";
import { useAuthStore } from "../contexts/auth";

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  height: 50px;
`;

export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastInitial: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const { firstName, lastInitial, email, phone, password } = formData;
  const [state, actions] = useAuthStore();

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.register(formData);
  };

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <StyledInput
          type="text"
          name="firstName"
          placeholder="First Name"
          id="firstName"
          value={firstName}
          onChange={(e) => onChange(e)}
          required
        />
        <StyledInput
          type="text"
          name="lastInitial"
          id="lastInitial"
          placeholder="Last Name Initial"
          value={lastInitial}
          onChange={(e) => onChange(e)}
          required
          autoComplete="false"
        />
        <StyledInput
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(e)}
          autoComplete="false"
        />
        <StyledInput
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => onChange(e)}
          required
          autoComplete="false"
          placeholder="Password"
        />

        <StyledInput
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => onChange(e)}
          placeholder="Phone (optional)"
        />
        <br />
        <StyledInput type="submit" value="Submit" />
      </form>
    </Wrapper>
  );
};

export default Register;
