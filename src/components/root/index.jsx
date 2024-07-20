import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import * as SC from "./styles";
import { Container } from "../ui/container";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export const Root = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const exitUser = () => {
    dispatch(logout())
    navigate('/auth')
  }

  return (
    <>
      <Container>
        <SC.Menu>
          <SC.MenuItem to={"/"}>Main</SC.MenuItem>
          <SC.MenuItem to={"/posts"}>Posts</SC.MenuItem>
          {!user ? (
            <>
              <SC.MenuItem to={"/auth"}>Authtorization</SC.MenuItem>
              <SC.MenuItem to={"/registration"}>Registration</SC.MenuItem>
            </>
          ) : (
            <>
              <SC.MenuItem to={"/posts/add"}>Create post</SC.MenuItem>
              <button onClick={() => exitUser()}>Exit</button>
            </>
          )}
        </SC.Menu>
      </Container>
      <Outlet />
    </>
  );
};
