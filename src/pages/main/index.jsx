import React, { useEffect } from "react"
import { Posts } from "../../components/posts";
import { Container } from "../../components/ui/container";
import * as SC from './styled'
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";

export const MainPage = () => {
  const {list, loading} = useSelector((state) => state.posts.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!list) {
      dispatch(getPosts())
    }
  }, [])

  return (
    <Container>
      {
        !loading ?
        <>
          <SC.Title>Posts</SC.Title>
          <Posts posts={list}/>
        </>
        : null
      }
    </Container>
  );
}