import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../api/postsApi";
import { postsSorting } from "./helpers/postsSort";

export const getPostById = createAsyncThunk("posts/fetchById", async (id) => {
  const response = await postApi.fetchById(id);

  return response;
});

export const getPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await postApi.fetchPosts();

  return response
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: {
      list: null,
      loading: true
    },
    onPage: {
      list: null,
      maxPage: 0
    },
    userPosts: [],
    postForView: {
      post: null,
      loading: true
    }
  },
  reducers: {
    setPage: (state, action) => {
      const {pageNumber, filter} = action.payload
      const { list, loading } = state.allPosts
      const firstElement = pageNumber * 10
      const lastElement = firstElement + 10

      if (!loading) {
        const allPosts = [...list]
        
        state.onPage.list = filter ? allPosts.slice(firstElement, lastElement) : [...state.userPosts].slice(firstElement, lastElement)
      }
    },
    editPosts: (state, action) => {
      state.allPosts.list = state.allPosts.list.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }

        return post;
      });
    },
    addPost: (state, action) => {
      const { list } = state.allPosts
      const allList = list ? [...list] : []
      const userPosts = [...state.userPosts] || []
      const allPosts = [...userPosts, ...allList]
      const newPost = { ...action.payload };
      
      newPost.id = allPosts.length ? allPosts[0].id + 1 : 101

      allPosts.push(newPost)
      userPosts.push(newPost)
      
      state.allPosts.list = postsSorting.sortById(allPosts)
      state.userPosts = postsSorting.sortById(userPosts)
      state.onPage.maxPage = Math.floor(allPosts.length/10) - 1
    },
    showPost: (state, action) => {
      state.postForView = {
        post: action.payload,
        loading: false,
      };
    },
    deletePost: (state, action) => {
      state.allPosts.list = state.allPosts.list.filter((post) => post.id !== action.payload.id)
      state.postForView = {
        post: null,
        loading: false
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.allPosts.loading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        const newAllPosts = [...state.userPosts, ...action.payload]

        state.allPosts.list = postsSorting.sortById(newAllPosts)
        state.allPosts.loading = false
        state.onPage.list = newAllPosts.slice(0, 10)
        state.onPage.maxPage = Math.floor(newAllPosts.length / 10) - 1
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

export const { editPosts, addPost, showPost, deletePost, setPage } = postsSlice.actions;

export default postsSlice.reducer;
