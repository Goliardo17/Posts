import React from "react";
import { Typo } from "../../components/typo";
import { Container } from "../../components/root/container";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const [formValues, setFormVlaues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const userId = Date.now()

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const users = JSON.parse(localStorage.getItem("users"));
      const newUser = { id: userId, ...formValues }

      if (!users) {
        localStorage.setItem("users", JSON.stringify([newUser]));
        navigate('/auth')
        alert('Registration complete')
        return;
      }

      if (users.find((user) => user.email === formValues.email)) {
        alert("Sorry");
        return;
      }

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      navigate('/auth')
      alert('Registration complete')
    } catch (er) {
      console.error(er);
    }
  };

  const onChange = (name, value) => {
    setFormVlaues({ ...formValues, [name]: value });
  };

  const disabled = () =>
    !formValues.name ||
    !formValues.surname ||
    !formValues.email ||
    !formValues.password;

  return (
    <Container>
      <Typo>Registration</Typo>
      <Form onSubmit={onSubmit}>
        <Field>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
          </Field>
          <Field>
          <Input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formValues.surname}
            onChange={(e) => onChange(e.target.surname, e.target.value)}
          />
          </Field>
          <Field>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={(e) => onChange(e.target.email, e.target.value)}
          />
          </Field>
          <Field>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={(e) => onChange(e.target.password, e.target.value)}
          />
          </Field>
          <button type="submit" disabled={disabled}>
            Registrate
          </button>
      </Form>
    </Container>
  );
};
