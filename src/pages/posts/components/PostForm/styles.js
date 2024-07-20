import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: 1px solid #282c34;
`;

export const Button = styled.button`
  border: none;
  background: #282c34;
  color: white;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #2c2e34;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;