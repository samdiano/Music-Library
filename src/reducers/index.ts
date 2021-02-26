import { combineReducers } from "redux";
import user from "./UserReducer";
import album from "./AlbumReducer";

export default combineReducers({
  user,
  album
});
