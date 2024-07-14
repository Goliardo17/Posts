import React from "react";
import { Outlet } from "react-router-dom";
import * as SC from "./styles";
import { Container } from "./container";

export const Root = () => {
  return (
    <>
      <Container>
        <SC.Menu>
          <SC.MenuItem to={"/"}>Main</SC.MenuItem>
          <SC.MenuItem to={"/posts"}>Posts</SC.MenuItem>
          <SC.MenuItem to={"/auth"}>Authtorization</SC.MenuItem>
          <SC.MenuItem to={"/registation"}>Registration</SC.MenuItem>
        </SC.Menu>
      </Container>
      <Outlet />
    </>
  );
};