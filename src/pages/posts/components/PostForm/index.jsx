import React, { useState } from "react";
import { Form } from "../../../../components/ui/form";
import { Field } from "../../../../components/ui/field";
import { Input } from "../../../../components/ui/input";
import * as SC from "./styles";
import { Container } from "../../../../components/ui/container";
import { Typo } from "../../../../components/ui/typo";

const DEF_VALUES = { title: "", body: "" };

export const PostFrom = ({ title, onSubmitForm, defaultValues }) => {
  const [formValues, setFormVlaues] = useState(defaultValues || DEF_VALUES);

  const onChange = (name, value) => {
    setFormVlaues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(formValues);
    !defaultValues && setFormVlaues(DEF_VALUES);
  };

  const disabled = () => !formValues.title || !formValues.body;
  return (
    <Container>
      <Typo>{title}</Typo>
      <Form onSubmit={onSubmit}>
        <Field>
          <Input
            type="text"
            name="title"
            placeholder="Post title"
            value={formValues.title}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <SC.Textarea
            name="body"
            placeholder="text"
            rows={10}
            cols={30}
            value={formValues.body}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <button type="submit" disabled={disabled}>
          Save
        </button>
      </Form>
    </Container>
  );
};
