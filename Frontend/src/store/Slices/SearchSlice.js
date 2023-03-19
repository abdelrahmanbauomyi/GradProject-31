const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {
    title: "",
    gender: "",
    availability: "",
    entity: "",
    fees: "",
  },
  reducers: {
    setGender(state, action) {
      if (action.payload === "Any") {
        state.gender = "";
        return;
      }
      state.gender = action.payload;
    },
    setTitle(state, action) {
      const title = action.payload;
      if (title.checked) {
        state.title += title.check;
      } else {
        state.title = state.title.replace(title.check, "");
      }
    },
    setEntity(state, action) {
      const entity = action.payload;
      if (entity.checked) {
        state.entity += entity.check;
      } else {
        state.entity = state.entity.replace(entity.check, "");
      }
    },
    setAvailability(state, action) {
      if (action.payload === "Any Day") {
        state.availability = "";
        return;
      }
      state.availability = action.payload;
    },
    setFees(state, action) {
      if (action.payload === "Any") {
        state.fees = "";
        return;
      }
      state.fees = action.payload;
    },
  },
});
export const searchActions = searchSlice.actions;
export default searchSlice;
