import React, { useState, useEffect } from "react";
import { Container } from "../../components/ui/container";
import { Posts } from "../../components/posts";
import { Button } from "../../components/ui/button";
import * as SC from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, setPage } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/loader";

export const PostsPage = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [filter, setFilter] = useState(true)
  const { loading } = useSelector((state) => state.posts.allPosts);
  const { list, maxPage } = useSelector((state) => state.posts.onPage);
  const dispatch = useDispatch();

  const incrementPage = () => {
    const newPageNumber = pageNumber + 1;
    console.log(newPageNumber, filter)
    dispatch(setPage({pageNumber: newPageNumber, filter}));
    setPageNumber(newPageNumber);
  };

  const decrementPage = () => {
    const newPageNumber = pageNumber - 1;
    dispatch(setPage({pageNumber: newPageNumber, filter}));
    setPageNumber(newPageNumber);
  };

  const changeFilter = () => {
    setFilter(!filter)
    dispatch(setPage({pageNumber, filter: !filter}));
  }

  useEffect(() => {
    if (loading) {
      dispatch(getPosts());
    }
    dispatch(setPage({pageNumber, filter}));
  }, []);

  return (
    <>
      {!loading && list ? (
        <Container>
          <SC.Title>Posts</SC.Title>
          <SC.ButtonWrapper>
            <Button
              styled="common"
              label={filter ? "Filter by users posts" : "Filter all posts"}
              onClick={() => changeFilter()}
            />
          </SC.ButtonWrapper>
          <SC.ButtonWrapper>
            <Button
              styled="common"
              label="after"
              onClick={() => decrementPage()}
              disabled={pageNumber && list.length ? false : true}
            />
            {pageNumber + 1}
            <Button
              styled="common"
              label="before"
              onClick={() => incrementPage()}
              disabled={pageNumber !== maxPage && list.length ? false : true}
            />
          </SC.ButtonWrapper>
          {list.length ? <Posts posts={list} /> : <Container>sorry, but the user has not yet written a single post.</Container>}
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
