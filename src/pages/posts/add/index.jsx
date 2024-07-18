import React from "react";
import { PostFrom } from "../components/PostForm";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/slices/postsSlice";

export const AddPostPage = () => {
    const dispatch = useDispatch()

    const onSubmitForm = (formValues) => dispatch(addPost(formValues))

    return (
        <PostFrom title='Create new post' onSubmitForm={onSubmitForm}/>
    )
}