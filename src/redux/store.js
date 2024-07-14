import { configureStore } from "@reduxjs/toolkit";
import postsReducers from  "./slices/postsSlice"
import authReducers from  "./slices/authSlice"

export default configureStore({
    reducer: {
        posts: postsReducers,
        auth: authReducers
    }
})