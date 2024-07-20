import React from "react";
import * as SC from "./styled";

export const Link = ({ children, ...props }) => (
  <SC.SimpleLink {...props}>{children}</SC.SimpleLink>
);
