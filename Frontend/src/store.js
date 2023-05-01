import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userDetailsReducers,
  userLoginReducers,
  userRegisterReducers,
  userUpdateReducers,
} from "./reducers/auth";
import { searchReducer } from "./reducers/searchReducer";

const reducer = combineReducers({
  userLogin: userLoginReducers,
  searchFilters: searchReducer,
  userRegister: userRegisterReducers,
  userDetails: userDetailsReducers,
  userUpdateProfile: userUpdateReducers,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  //composeWithDevTools(applyMiddleware(...middleware))
  applyMiddleware(thunk)
);

export default store;
