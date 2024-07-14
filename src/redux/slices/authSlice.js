import { createSlice } from "@reduxjs/toolkit"; 

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: []
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state) => {

        },
        registerUser: (satate, action) => {

        }
    }
})

export const { login, logout, registerUser } = authSlice.actions

export default authSlice.reducer