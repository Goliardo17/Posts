import React from "react";
import { Post } from "./post";
import * as SC from "./styled";
import { Loader } from "../ui/loader";

export const Posts = ({ posts }) => (
  <>
  {
    posts.length ?
    <SC.Posts>
      {posts.map((post) => (
        <Post key={"post-" + post.id} post={post} />
      ))}
    </SC.Posts>
      : <Loader/>
  }
  </>
)