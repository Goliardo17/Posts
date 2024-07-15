import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/typo";
import { Container } from "../../../components/root/container";
import { Link } from "../../../components/Link";
import * as SC from "./styles"
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.postForView)
  const dispatch = useDispatch()

  if (post) {
    return <></>;
  }

  useEffect(() => {
    dispatch(getPost(id))
  }, [])

  return (
    <Container>
      <Typo>{post.title}</Typo>
      <SC.Image src={post.image} alt={post.title} />
      <SC.Text>{post.text}</SC.Text>
      <div style={{clear: 'both'}}></div>
      <Link to="/posts">Back to posts</Link>
    </Container>
  )
};
