import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    username: null,
    token: null,
  },
};
var userSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      window.localStorage.setItem("token", action.payload.token);
      window.localStorage.setItem("username", action.payload.username);
      state.user.username = action.payload.username;
      state.user.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      window.localStorage.removeItem("token");
    },
  },
});

export const { updateUser, logout } = userSlice.actions;
var userReducer = userSlice.reducer;
export default userReducer;
