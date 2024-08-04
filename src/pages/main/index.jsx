import React, { useEffect } from "react";
import { Posts } from "../../components/posts";
import { Container } from "../../components/ui/container";
import * as SC from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/loader";

export const MainPage = () => {
  const { list, loading } = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
    }
  }, []);

  return (
    <>
      {!loading && list ? (
        <Container>
          <SC.Title>Posts</SC.Title>
          <Posts posts={list.slice(0, 3)} />
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
