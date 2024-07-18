import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/typo";
import { Container } from "../../../components/root/container";
import { Link } from "../../../components/Link";
import * as SC from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, showPost } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
  const { id } = useParams();
  const posts = useSelector((state) =>state.posts.posts.list)
  const { post, loading } = useSelector((state) => state.posts.postForView);
  const dispatch = useDispatch();

  const image = post.image || "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg"


  useEffect(() => {
    const intId = Number(id)
    const findedPosts = posts ? posts.find((item) => item.id === id) : undefined
    if (findedPosts) {
      dispatch(showPost(findedPosts))
    } else {
      dispatch(getPostById(intId));
    }
  }, [id, list, dispatch]);

  return (
    <Container>
      {!loading ? (
        <>
          <Typo>{post.title}</Typo>
          {post?.image ? <SC.Image src={post.image} alt={post.title} /> : <SC.Image src={image} alt={post.title} />}
          <SC.Text>{post.text}</SC.Text>
          <div style={{ clear: "both" }}></div>
          <Link to="/posts">Back to posts</Link>
          <Link to={`/posts/${id}/edit`}>Edit post</Link>
        </>
      ) : (
        <>Loading...</>
      )}
    </Container>
  );
};
