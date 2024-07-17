import React from "react";
import * as SC from "./styles"

export const Post = ({ post }) => {
    const image = post.image || "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg"

    return (
    <SC.Post>
        {post?.image ? <SC.Image src={post.image} /> : <SC.Image src={image} />}
        <SC.Title>Some title</SC.Title>
        <SC.DetailLink to={`posts/${post.id}`}>Read more.</SC.DetailLink>
    </SC.Post>
)}