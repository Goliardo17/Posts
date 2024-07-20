import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typo } from "../../../components/ui/typo";
import { Container } from "../../../components/ui/container";
import { Link } from "../../../components/ui/Link";
import * as SC from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostById,
  showPost,
  deletePost,
} from "../../../redux/slices/postsSlice";

const image = "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg"

export const DetailPostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.posts.list);
  const { user } = useSelector((state) => state.auth);
  const { post, loading } = useSelector((state) => state.posts.postForView);

  const [postForDelete, setPostForDelete] = useState(null);

  const showEditAndDelBtn = posts && user;

  const onDeletePost = () => {
    dispatch(deletePost(postForDelete));
    setPostForDelete(null);
    navigate("/posts");
  };

  const test = post?.image

  useEffect(() => {
    const intId = Number(id);
    const findedPosts = posts
      ? posts.find((item) => item.id === id)
      : undefined;
    if (findedPosts) {
      dispatch(showPost(findedPosts));
    } else {
      dispatch(getPostById(intId));
    }
  }, [id, posts, dispatch]);

  return (
    <Container>
      {postForDelete ? (
        <SC.ModalWrapper>
          <SC.Modal>
            <SC.ModalText>Are you shore?</SC.ModalText>
            <SC.ModalContent>
              <SC.DeleteButton onClick={() => onDeletePost()}>
                Yes
              </SC.DeleteButton>
              <button onClick={() => setPostForDelete(null)}>No</button>
            </SC.ModalContent>
          </SC.Modal>
        </SC.ModalWrapper>
      ) : null}
      {!loading && post ? (
        <>
          <Typo>{post.title}</Typo>
          {test ? (
            <SC.Image src={post.image} alt={post.title} />
          ) : (
            <SC.Image src={image} alt={post.title} />
          )}
          <SC.Text>{post.text}</SC.Text>
          <div style={{ clear: "both" }}></div>
          <Link to="/posts">Back to posts</Link>
          {showEditAndDelBtn ? (
            <>
              <Link to={`/posts/${id}/edit`}>Edit post</Link>
              <SC.DeleteButton onClick={() => setPostForDelete(post)}>
                Delete post
              </SC.DeleteButton>
            </>
          ) : null}
        </>
      ) : (
        <>Loading...</>
      )}
    </Container>
  );
};
