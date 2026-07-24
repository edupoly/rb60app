import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    username: null,
    email: null,
    picture: null,
    token: null,
  },
};
var userSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log("action::", action);
      document.title = action.payload.email || action.payload.username;
      window.localStorage.setItem("token", action.payload.token);
      window.localStorage.setItem("username", action.payload.username);
      window.localStorage.setItem("email", action.payload.email || null);
      window.localStorage.setItem("picture", action.payload.picture || null);
      // console.log("Updating user in slice", action.payload);
      console.log("Updating user in slice", state, action);
      state.user = { ...action.payload };
    },
    logout: (state) => {
      state.user = null;
      window.localStorage.clear();
    },
  },
});

export const { updateUser, logout } = userSlice.actions;
var userReducer = userSlice.reducer;
export default userReducer;
