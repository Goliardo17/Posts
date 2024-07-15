import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
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
    postForView: null,
    freshPosts: null
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    editPosts: (state, action) => {},
    getPost: (state, action) => {
      const id = action.payload
      const posts = [...state.list]
      const postForView = posts.find((i) => i.id === Number(id))
      
      state.postForView = postForView
    },
    getFreshPosts: (state) => {
      const posts = [...state.list]
      const freshPosts = posts.slice(0, 3)

      state.freshPosts = freshPosts
    },
    addPost: (state, action) => {},
  },
});

export const { setPosts, editPosts, getPost, addPost, getFreshPosts } = postsSlice.actions;

export default postsSlice.reducer;
