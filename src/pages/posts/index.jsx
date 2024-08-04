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
  const [filter, setFilter] = useState(true);
  const allPost = useSelector((state) => state.posts.allPosts);
  const onPage = useSelector((state) => state.posts.onPage);
  const dispatch = useDispatch();

  const incrementPage = () => {
    const newPageNumber = pageNumber + 1;
    dispatch(setPage({ pageNumber: newPageNumber, filter }));
    setPageNumber(newPageNumber);
  };

  const decrementPage = () => {
    const newPageNumber = pageNumber - 1;
    dispatch(setPage({ pageNumber: newPageNumber, filter }));
    setPageNumber(newPageNumber);
  };

  const changeFilter = () => {
    setFilter(!filter);
    dispatch(setPage({ pageNumber, filter: !filter }));
  };

  useEffect(() => {
    if (!allPost.list) {
      dispatch(getPosts());
    }
    dispatch(setPage({ pageNumber, filter }));
  }, []);

  return (
    <>
      {!allPost.loading && onPage.list ? (
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
              label="before"
              onClick={() => decrementPage()}
              disabled={pageNumber && onPage.list.length ? false : true}
            />
            {pageNumber + 1}
            <Button
              styled="common"
              label="after"
              onClick={() => incrementPage()}
              disabled={pageNumber !== allPost.maxPage && onPage.list.length ? false : true}
            />
          </SC.ButtonWrapper>
          {onPage.list.length ? (
            <Posts posts={onPage.list} />
          ) : (
            <Container>
              sorry, but the user has not yet written a single post.
            </Container>
          )}
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
