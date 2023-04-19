const initialState = {
  title: [],
  gender: "",
  availability: "",
  entity: [],
  fees: "",
};
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GENDER":
      if (action.payload === "Any") {
        return { ...state, gender: "" };
      }
      return { ...state, gender: action.payload.toLowerCase() };
    case "TITLE":
      const title = action.payload;
      const titleArray = state.title;
      if (title.checked) {
        titleArray.push(title.check);
        return { ...state, title: titleArray };
      } else {
        const titleIndex = titleArray.indexOf(title.check);
        titleArray.splice(titleIndex, 1);
        return { ...state, title: titleArray };
      }
    case "ENTITY":
      const entity = action.payload;
      const entitiesArray = state.entity;
      if (entity.checked) {
        entitiesArray.push(entity.check);
        return { ...state, entity: entitiesArray };
      } else {
        const entityIndex = entitiesArray.indexOf(entity.check);
        entitiesArray.splice(entityIndex, 1);
        return { ...state, entity: entitiesArray };
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
