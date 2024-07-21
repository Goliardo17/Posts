import React from "react";
import * as SC from "./styled";

export const Button = ({ styled, label, ...rest }) => {
  if (!styled) {
    return (
      <SC.ButtonDefault {...rest}>{label || "default button"}</SC.ButtonDefault>
    );
  }

  switch (styled) {
    case "delete":
      return <SC.ButtonDelete {...rest}>{label}</SC.ButtonDelete>;
    case "save":
      return <SC.ButtonSave {...rest}>{label}</SC.ButtonSave>;
      case "common":
      return <SC.ButtonCommon {...rest}>{label}</SC.ButtonCommon>;
    default:
      return (
        <SC.ButtonDefault {...rest}>
          {label || "default button"}
        </SC.ButtonDefault>
      );
  }
};
