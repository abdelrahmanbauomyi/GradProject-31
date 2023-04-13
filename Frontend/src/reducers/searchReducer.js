const initialState = {
  title: "",
  gender: "",
  availability: "",
  entity: "",
  fees: "",
};
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GENDER":
      if (action.payload === "Any") {
        return { ...state, gender: "" };
      }
      return { ...state, gender: action.payload };
    case "TITLE":
      const title = action.payload;
      if (title.checked) {
        return { ...state, title: (state.title += title.check) };
      } else {
        return { ...state, title: state.title.replace(title.check, "") };
      }
    case "ENTITY":
      const entity = action.payload;
      if (entity.checked) {
        return { ...state, entity: (state.entity += entity.check) };
      } else {
        return { ...state, entity: state.entity.replace(entity.check, "") };
      }
    case "AVAILABILITY":
      if (action.payload === "Any Day") {
        return { ...state, availability: "" };
      }
      return { ...state, availability: action.payload };
    case "FEES":
      if (action.payload === "Any") {
        return { ...state, fees: "" };
      }
      return { ...state, fees: action.payload };
    default:
      return state;
  }
};
