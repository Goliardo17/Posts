import React from "react"
import { Posts } from "../../components/posts";
import { Container } from "../../components/root/container";
import * as SC from './styled'
import { useDispatch, useSelector } from "react-redux";
import { getFreshPosts } from "../../redux/slices/postsSlice";

export const MainPage = () => {
  const {list, loading} = useSelector((state) => state.posts.freshPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFreshPosts())
  }, [dispatch])

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