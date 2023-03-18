import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./Slices/SearchSlice";
import userSlice from "./Slices/UserSlice";

const store = configureStore({
  reducer: { search: searchSlice.reducer, user: userSlice.reducer },
});
export default store;
