import React, { useState } from "react";
import { Container } from "../../components/ui/container";
import { Form } from "../../components/ui/form";
import { Field } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { Typo } from "../../components/ui/typo"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice"

export const AuthPage = () => {
  const [formValues, setFormVlaues] = useState({
    email: "",
    password: "",
  });
  console.log(formValues)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const users = JSON.parse(localStorage.getItem("users"));

      if (!users) {
        localStorage.setItem("users", JSON.stringify([]));
        // navigate('/auth')
        alert('Sorry')
        return;
      }

      const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password)

      if (!currentUser) {
        alert('No')
        return;
      }

      dispatch(login(currentUser))
      navigate('/posts')
    } catch (er) {
      console.error(er)
    }
  };

  const changeValue = (key, value) => {
    setFormVlaues({...formValues, [key]: value});
  };

  const disabled = !formValues.email && !formValues.password;

  return (
    <Container>
      <Typo>Authorization</Typo>
      <Form onSubmit={onSubmit}>
        <Field>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={(e) => changeValue(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={(e) => changeValue(e.target.name, e.target.value)}
          />
        </Field>
        <button type="submit" disabled={disabled}>
          Enter
        </button>
      </Form>
    </Container>
  );
};
