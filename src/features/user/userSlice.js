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
      // console.log("Updating user in slice", action.payload);
      console.log("Updating user in slice", state, action);
      state.user = { ...action.payload };
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
