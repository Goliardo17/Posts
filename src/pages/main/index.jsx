import React from "react"
import { Posts } from "../../components/posts";
import { Container } from "../../components/root/container";
import * as SC from './styled'

const INITIAL_POSTS = [
  {
    id: 1,
    title: 'post 1',
    image: "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg"
  },
  {
    id: 2,
    title: 'post 2',
    image: "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg"
  },
  {
    id: 3,
    title: 'post 3',
    image: "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg"
  },
]

export const MainPage = () => {
  return (
    <Container>
      <SC.Title>Posts</SC.Title>
      <Posts posts={INITIAL_POSTS}/>
    </Container>
  );
}