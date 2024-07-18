import React, { useState } from "react";
import * as SC from "./styles";
import { Container } from "../../../../components/root/container";
import { Typo } from "../../../../components/typo";

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
      <SC.Form onSubmit={onSubmit}>
        <SC.Field>
          <SC.Input
            type="text"
            name="title"
            placeholder="Post title"
            value={formValues.title}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </SC.Field>
        <SC.Field>
          <SC.Textarea
            name="body"
            placeholder="text"
            rows={10}
            cols={30}
            value={formValues.body}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </SC.Field>
        <button type="submit" disabled={disabled}>
          Save
        </button>
      </SC.Form>
    </Container>
  );
};
