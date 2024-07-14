import React from "react";
import * as SC from "./styles"

export const Post = ({ post }) => (
    <SC.Post>
        <SC.Image src={post.image} />
        <SC.Title>Some title</SC.Title>
        <SC.DetailLink to={`posts/${post.id}`}>Read more.</SC.DetailLink>
    </SC.Post>
)