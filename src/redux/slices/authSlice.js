import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    user: []
}

export const authSlice = createSlice({
    name: 'auth',
    intialState,
    reducers: {
        login: (state, action) => {

        },
        logout: (state) => {

        },
        registerUser: (satate, action) => {

        }
    }
})

export const { login, logout, registerUser } = postsSlice.actions

export default postsSlice.reducer