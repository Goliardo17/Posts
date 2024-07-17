import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../api/postsApi";

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
      list: [
        {
          id: 1,
          title: "post 1",
          image:
            "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aspernatur.",
        },
        {
          id: 2,
          title: "post 2",
          image:
            "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aspernatur.",
        },
        {
          id: 3,
          title: "post 3",
          image:
            "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aspernatur.",
        },
        {
          id: 4,
          title: "post 4",
          image:
            "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aspernatur.",
        },
        {
          id: 5,
          title: "post 5",
          image:
            "https://img.razrisyika.ru/kart/20/1200/77417-zhivotny-i-zverey-3.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aspernatur.",
        },
      ],
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
    editPosts: (state, action) => {},
    addPost: (state, action) => {},
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

export const { editPosts, addPost } = postsSlice.actions;

export default postsSlice.reducer;
