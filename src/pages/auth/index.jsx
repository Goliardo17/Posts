import React from "react";
import { Container } from "../../components/ui/container";
import { Form } from "../../components/ui/form";
import { Field } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { useDispatch } from "react-redux";

export const AuthPage = () => {
  const [formValues, setFormVlaues] = useState({
    email: "",
    password: "",
  });
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

  const onChange = (name, value) => {
    setFormVlaues({ ...formValues, [name]: value });
  };

  const disabled = () => !formValues.email || !formValues.password;

  return (
    <Container>
      <Typo>Authorization</Typo>
      <From>
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
          Enter
        </button>
      </From>
    </Container>
  );
};
