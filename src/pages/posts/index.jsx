import React from "react";
import { Container } from "../../components/root/container";
import { Posts } from "../../components/posts";
import * as SC from "./styled"

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
  {
    id: 4,
    title: 'post 4',
    image: "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg"
  },
  {
    id: 5,
    title: 'post 5',
    image: "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg"
  },
]

export const PostsPage = () => (
  <Container>
    <SC.Title>Posts</SC.Title>
    <Posts posts={INITIAL_POSTS}/>
  </Container>
);