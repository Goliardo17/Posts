import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../api/postsApi";
import { initionalPosts } from "./constants/posts";

export const getPostById = createAsyncThunk("posts/fetchById", async (id) => {
  const response = await postApi.fetchById(id);

  return response;
});

export const getPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await postApi.fetchPosts();

  return response;
});

export const getFreshPosts = createAsyncThunk(
  "posts/fetchFreshPosts",
  async (limit) => {
    const response = await postApi.fetchFreshPosts(limit);

    return response;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {
      list: null,
      loading: false,
    },
    postForView: {
      post: null,
      loading: false,
    },
    freshPosts: {
      list: null,
      loading: false,
    },
  },
  reducers: {
    editPosts: (state, action) => {
      state.posts.list = state.posts.list.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }

        return post;
      });
    },
    addPost: (state, action) => {
      const newPost = { ...action.payload };
      newPost.id = new Date().getTime();
      state.posts.list = state.posts.list
        ? [newPost, ...state.posts.list]
        : [newPost];
    },
    showPost: (state, action) => {
      state.postForView = {
        post: action.payload,
        loading: false,
      };
    },
    deletePost: (state, action) => {
      state.posts.list = state.posts.list.filter((post) => post.id !== action.payload.id)
      state.postForView = {
        post: null,
        loading: false
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.posts = {
          list: null,
          loading: true,
        };
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = { list: action.payload, loading: false };
      })
      .addCase(getFreshPosts.pending, (state) => {
        state.freshPosts = {
          list: null,
          loading: true,
        };
      })
      .addCase(getFreshPosts.fulfilled, (state, action) => {
        state.freshPosts = { list: action.payload, loading: false };
      })
      .addCase(getPostById.pending, (state) => {
        state.postForView = {
          post: null,
          loading: true,
        };
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.postForView = {
          post: action.payload,
          loading: false,
        };
      });
  },
});

export const { editPosts, addPost, showPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
