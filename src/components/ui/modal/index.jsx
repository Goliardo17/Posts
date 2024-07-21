import React from "react";
import * as SC from "./styled";

export const Modal = ({ children }) => (
  <SC.ModalWrapper>
    <SC.Modal>{children}</SC.Modal>
  </SC.ModalWrapper>
);
