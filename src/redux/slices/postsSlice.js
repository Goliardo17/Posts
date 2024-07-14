import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    posts: []
}

export const postsSlice = createSlice({
    name: 'posts',
    intialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        editPosts: (state, action) => {

        },
        getPost: (state, action) => {

        },
        addPost: (state, action) => {

        }
    }
})

export const { setPosts, editPosts, getPost, addPost } = postsSlice.actions

export default postsSlice.reducer