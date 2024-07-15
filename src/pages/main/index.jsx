import React from "react"
import { Posts } from "../../components/posts";
import { Container } from "../../components/root/container";
import * as SC from './styled'
import { useDispatch, useSelector } from "react-redux";
import { getFreshPosts } from "../../redux/slices/postsSlice";

export const MainPage = () => {
  const freshPosts = useSelector((state) => state.posts.freshPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFreshPosts())
  }, [])

  return (
    <Container>
      {
        freshPosts ?
        <>
          <SC.Title>Posts</SC.Title>
          <Posts posts={freshPosts}/>
        </>
        : null
      }
    </Container>
  );
}