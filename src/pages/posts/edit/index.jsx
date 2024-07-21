import React from "react";
import { PostFrom } from "../components/PostForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPosts, getPostById } from "../../../redux/slices/postsSlice";

export const EditPostPage = () => {
    const { id } = useParams()
    const {list} = useSelector((state) => state.posts.allPosts)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmitForm = (formValues) => {
        dispatch(editPosts(formValues))
        navigate(`/posts/${id}`)
    }

    if (!list) {
        return <>404</>
    }

    const findedPosts = list.find((item) => item.id === Number(id))
    
    return (
        <PostFrom title='Edit post' onSubmitForm={onSubmitForm} defaultValues={findedPosts}/>
    )
}