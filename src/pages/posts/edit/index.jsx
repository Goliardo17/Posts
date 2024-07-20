import React from "react";
import { PostFrom } from "../components/PostForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPosts, getPostById } from "../../../redux/slices/postsSlice";

export const EditPostPage = () => {
    const { id } = useParams()
    const {list} = useSelector((state) => state.posts.posts)

    const dispatch = useDispatch()

    const onSubmitForm = (formValues) => dispatch(editPosts(formValues))

    if (list) {
        return <>404</>
    }

    const findedPosts = list.find((item) => item.id === Number(id))
    
    return (
        <PostFrom title='Edit post' onSubmitForm={onSubmitForm} defaultValues={findedPosts}/>
    )
}