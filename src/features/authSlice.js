import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
const userName = localStorage.getItem("userName");

const initialState = {
    userId: userId || null,
    userName: userName || null,
    token: token || null,
    isAuthenticated: !!token,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.userId = action.payload._id;
            state.userName = action.payload.name;
            state.token = action.payload.token;
            state.isAuthenticated = true;

            localStorage.setItem("userId", action.payload._id);
            localStorage.setItem("userName", action.payload.name);
            localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.userId = null;
            state.userName = null;
            state.token = null;
            state.isAuthenticated = false;

            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
            localStorage.removeItem("token");
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;