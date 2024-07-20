import React from "react";
import * as SC from "./styles"

export const From = ({children, ...rest}) => <SC.Form {...rest}>{children}</SC.Form>