import React from "react";
import { Post } from "./post";
import * as SC from "./styled";

export const Posts = ({ posts }) => (
  <>
    <SC.Posts>
      {posts.map((post) => (
        <Post key={"post-" + post.id} post={post} />
      ))}
    </SC.Posts>
  </>
);