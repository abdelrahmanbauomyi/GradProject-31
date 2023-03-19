import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice;
