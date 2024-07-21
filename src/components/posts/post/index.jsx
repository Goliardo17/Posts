import React from "react";
import * as SC from "./styles"

const image = "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg"

export const Post = ({ post }) => {
    const test = post?.image

    return (
    <SC.Post>
        {test ? <SC.Image src={post.image} /> : <SC.Image src={image} />}
        <SC.Title>{post.title}</SC.Title>
        <SC.DetailLink to={`/posts/${post.id}`}>Read more...</SC.DetailLink>
    </SC.Post>
)}