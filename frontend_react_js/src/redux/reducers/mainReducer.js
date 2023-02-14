import { combineReducers } from "redux";
import productosReducer from "./productosReducer";

const mainReducer = combineReducers({
  productosReducer,
});

export default mainReducer;
