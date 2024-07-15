import React from "react";
import { Container } from "../../components/root/container";
import { Posts } from "../../components/posts";
import * as SC from "./styled"
import { useSelector } from "react-redux";

export const PostsPage = () => {
  const posts = useSelector((state) => state.posts.list)
  
  return (
    <Container>
      <SC.Title>Posts</SC.Title>
      <Posts posts={posts}/>
    </Container>
  )
};