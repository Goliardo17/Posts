import React, { useEffect }  from "react";
import { Container } from "../../components/ui/container";
import { Posts } from "../../components/posts";
import * as SC from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
    }
  }, []);

  return (
    <Container>
      {!loading ? (
        <>
          <SC.Title>Posts</SC.Title>
          <Posts posts={list} />
        </>
      ) : (
        <>Loading...</>
      )}
    </Container>
  );
};
